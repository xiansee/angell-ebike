const featureList = [
  //iconClasses contains classes required to extract the font awesome icon
  {
    iconClasses: "fas fa-road",
    title: "70KM Range",
    content: "Cillum appellat arbitror, cupidatat arbitrantur ita voluptate. Cernantur ita elit si se et domesticarum."
  },
  {
    iconClasses: "fas fa-charging-station",
    title: "2H Charge Time",
    content: "Fore de constias non doctrina tempor e cupidatat cohaerescant. E singulis a senserit, nam quid commodo."
  },
  {
    iconClasses: "fas fa-battery-full",
    title: "Removable Battery",
    content: "Eu se dolor aliquip, mandaremus ab aute. Quamquam exercitation ubi voluptate, pariatur ipsum sunt id illum."
  },
  {
    iconClasses: "fas fa-mobile-alt",
    title: "Angell App",
    content: "Quo minim ut nulla qui anim litteris eiusmod. Export ita quibusdam ad veniam, ab cupidatat consectetur."
  },
  {
    iconClasses: "fas fa-route",
    title: "Navigation",
    content: "Ne magna tractavissent et nostrud export minim sed tempor. Quo magna voluptate exercitation quo quorum hic ita quae voluptate."
  },
  {
    iconClasses: "fas fa-search-location",
    title: "Location Tracking",
    content: "Quem quo nam esse probant hic qui in irure eiusmod. Singulis sunt esse iudicem tempor eu in qui tractavissent."
  }
]

var modelList = [
  {
    name: "Angell",
    price: "$3999",
    defaultImgSrc: "/images/angell-silver.jfif",
    exploreURL: "https://angell.bike/en-eu/smartbike/angell/presentation",
    colorOptions: {
      silver: ["#c8c8c8", "#dcdcdc"],
      black: ["#171717", "#686868"]
    }
  },
  {
    name: "Angell S",
    price: "$3699",
    defaultImgSrc: "/images/angell-s-silver.jfif",
    exploreURL: "https://angell.bike/en-eu/smartbike/angell-s/presentation",
    colorOptions: {
      silver: ["#c7c7c7", "#dddddd"],
      black: ["#0a0a0a", "#6c6c6c"],
      green: ["#717159", "#adad9f"],
    }
  },
]

var faqList = [
  {
    question: "How fast can my Angell go?",
    answer: "Elit concursionibus officia quem ullamco ita aliqua non te illum iudicem. Constias fore veniam expetendis nisi ea in se exercitation. Ita culpa relinqueret te legam arbitror sed efflorescere. Ut eu distinguantur, quibusdam tamen labore deserunt quorum. Sed fugiat comprehenderit, proident dolore elit officia ipsum."
  },
  {
    question: "What are the differences between the two models?",
    answer: "A esse irure aute mandaremus se officia nulla aliquip. Est cillum iudicem, in labore esse si constias. Quid ea nam duis ingeniis sed se quamquam fidelissimae. Qui veniam quibusdam firmissimum, quem se mentitum hic magna."
  },
  {
    question: "Can I ride without a battery?",
    answer: "Singulis se ipsum, nostrud quem quem in legam."
  },
  {
    question: "Is my phone compatible with Angell?",
    answer: "Non an dolore duis noster non magna ullamco ubi elit esse. Fore ita appellat e irure nam ex velit incurreret. Est a ipsum dolore fugiat est nisi ab quamquam ab aute."
  },
  {
    question: "What are the assistance and autonomy modes of Angell?",
    answer: "Mandaremus id doctrina iis ne possumus e mandaremus. Duis aut hic anim cernantur, iis quibusdam ea occaecat. Excepteur an aliqua quo tempor cernantur praetermissum. Si fore tractavissent, labore ab incididunt se tempor. Senserit quae nostrud qui illum a cupidatat ea multos. O mentitum ex iudicem, minim nescius quo eiusmod."
  }
]

function assignId(array) {
  //Assigns an id to every object within the array
  var id = 0;
  array.map(obj => {
    obj.id = id;
    id = id + 1;
  })
  return array
}

modelList = assignId(modelList);
faqList = assignId(faqList);

module.exports = {
  featureList: featureList,
  modelList: modelList,
  faqList: faqList
};
