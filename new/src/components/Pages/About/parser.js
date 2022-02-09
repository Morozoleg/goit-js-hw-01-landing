import { BASE_URL } from "../../../utilities/http";

export default function(_data) {
  const { view_mode, entity: data } = _data.content.main_page_content;

  let arr;
  const firstSlide = [];
  const re = /<p>(.*?)<\/p>/g;

  while ((arr = re.exec(data.body[0].value)) !== null) {
    firstSlide.push(arr[1]);
  }

  const secondSlide = {
    description: data.field_team[0].field_description[0].value,
    title: view_mode.field_team.title,
    firmDescription: data.field_team[0].field_firm_description.map(
      ({ field_title, field_description }) => ({
        title: field_title[0].value,
        description: field_description[0].value
      })
    ),
    pictures: data.field_team[0].field_picture_and_description.map(
      ({
        field_image: [
          {
            uri: [{ url }]
          }
        ],
        field_title: [{ value }]
      }) => ({
        url: new URL(url, BASE_URL),
        value
      })
    )
  };

  const thirdSlide = {
    title: view_mode.field_customers.title,
    pictures: data.field_customers.map(
      ({ uri: [{ url }] }) => new URL(url, BASE_URL)
    )
  };

  const emails = data.field_contacts[0].field_email.map(({ value }) => ({
    type: "envelope",
    value
  }));

  const tels = data.field_contacts[0].field_tel.map(({ value }) => ({
    value,
    type: "mobile-alt"
  }));

  const locations = data.field_contacts[0].field_location.map(({ value }) => ({
    type: "map-marker-alt",
    value
  }));

  const fourthSlide = {
    items: emails.concat(tels, locations),
    titles: [view_mode.webform.title, view_mode.field_contacts.title, view_mode.field_follow_us.title]
  };

  return [firstSlide, secondSlide, thirdSlide, fourthSlide];
}
