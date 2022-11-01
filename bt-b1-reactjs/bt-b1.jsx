const h1 = React.createElement("h1", {
  id: "message",
  children: "Our Reviews",
});

const divAvatar = React.createElement("img", {
  src: "https://thumbs.dreamstime.com/b/businessman-icon-image-male-avatar-profile-vector-glasses-beard-hairstyle-179728610.jpg",
  alt: "anh ava",
});

const divName = React.createElement("div", {
  className: "Name",
  children: "Susan Smith",
});

const divPosition = React.createElement("div", {
  className: "Position",
  children: "WEB DEVELOPER",
});

const divInfo = React.createElement("div", {
  className: "Info",
  children: [divName,divPosition],
});
const divAuthor = React.createElement("div", {
    className: "Author",
    children: [divAvatar,divInfo]
})

const divContent = React.createElement("div", {
  className: "Content",
  children:
    "|'m baby meggings twee health goth +1.Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
});

const divReview = React.createElement("div", {
    className: "Review",
    children: [divAuthor, divContent],
})

const buttonLeft = React.createElement("button", {
  className: "btnLeft",
  children: "<",
});

const buttonRight = React.createElement("button", {
  className: "btnRight",
  children: ">",
});


const divControl = React.createElement("div", {
    className: "Control",
    children: [buttonLeft,buttonRight]
})

const divReviewCard = React.createElement("div", {
  className: "ReviewCard",
  children: [divReview, divControl],
});




const app = React.createElement("div", {
    className: "app1",
    children:[h1,divReviewCard]
})

const root = ReactDOM.createRoot(document.querySelector("#app"));
root.render(app);
