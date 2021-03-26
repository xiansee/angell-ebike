const modelList = JSON.parse($("#frontend-js").attr("modelList"));

//Activate color pickers
const animationDuration = 100 //ms

modelList.map(modelObj => {
  const imageId = `modelImage${modelObj.id}`;
  Object.keys(modelObj.colorOptions).map(colorName => {
    const colorPickerId = `${modelObj.id}-${colorName}`;
    $(`#${colorPickerId}`).click(() => {
      const newImageSrc = modelObj.name.split(" ").join("-").toLowerCase() + `-${colorName}`;
      if ($(`#${imageId}`).attr("src").includes(newImageSrc)) { return }
      $(`#${imageId}`).fadeOut(animationDuration, () => {
        $(`#${imageId}`).attr("src", `/images/${newImageSrc}.jfif`);
        $(`#${imageId}`).fadeIn(animationDuration)
      })
    })
  })
});

//Test ride form
$("#test-ride-form").submit(function (event) {
  const email = $(this).find("input").val();
  alert(`Demonstration - This button redirects the visitor to the test ride booking page with email ${email}.`)
  return false
});

//Contact us form
$("#contact-us-form").submit(function (event) {
  var inputElemList = [];
  var inputObj = {};
  $(this).find("button").each(function (index) {
    inputObj[`${$(this).attr("name")}`] = `${$(this).val()}`
  });
  $(this).find("input").each(function (index) {
    inputElemList.push($(this));
    inputObj[`${$(this).attr("name")}`] = `${$(this).val()}`
  });
  $(this).find("textarea").each(function (index) {
    inputElemList.push($(this));
    inputObj[`${$(this).attr("name")}`] = `${$(this).val()}`
  });

  fetch("/", {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(inputObj)
  }).then(res => {
    if (res.status === 200) {
      inputElemList.map(elem => elem.val(""));
      $("#feedback-success").css("display", "inline");
      $("#feedback-failure").css("display", "none");
    } else {
      $("#feedback-success").css("display", "none");
      $("#feedback-failure").css("display", "inline");
    }
  });
  return false
});
