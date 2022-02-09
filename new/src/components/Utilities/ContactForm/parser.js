const parseFormData = data => {
  const typeMap = {
    email: "email",
    textfield: "text",
    webform_actions: "submit",
    tel: "tel"
  };

  const result = {};
  const dataArr = Object.entries(data);
  const submit = dataArr.findIndex(
    ([, item]) => item["#type"] === "webform_actions"
  );
  result.submit = dataArr[submit][1][["#title"]];
  dataArr.splice(submit, 1);
  result.fields = dataArr.map(([name, item]) => {
    return {
      name,
      title: item["#title"],
      type: typeMap[item["#type"]]
    };
  });
  return result;
};

export default data => ({
  form: parseFormData(data.elements),
  thankYou: {
    text: data.settings.confirmation_title,
    button: data.settings.confirmation_back_label
  }
});
