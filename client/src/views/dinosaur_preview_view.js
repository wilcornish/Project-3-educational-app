const PubSub = require('../helpers/pub_sub.js');

const DinosaurPreviewView = function (container, dinosaur) {
  this.container = container;
  this.dinosaur = dinosaur;
};

DinosaurPreviewView.prototype.render = function () {
  const previewTitle = this.createTitle();
  this.container.appendChild(previewTitle);

  const previewDescription = this.createDescription();
  this.container.appendChild(previewDescription);

  const previewImage = this.createImage();
  this.container.appendChild(previewImage);

};

DinosaurPreviewView.prototype.createTitle = function () {
  const title = document.createElement('h4');
  title.classList.add("preview-title");
  title.textContent = this.dinosaur.name;
  return title;
};

DinosaurPreviewView.prototype.createDescription = function () {
  const description = document.createElement('p');
  description.classList.add("preview-description");
  description.textContent = this.dinosaur.description;
  return description;
};

DinosaurPreviewView.prototype.createImage = function () {
  const image = document.createElement('img');
  image.classList.add("preview-image");
  image.src = this.dinosaur.imageURL;
  // TODO: change this;
  image.alt = "A very good boy";
  return image;
};

DinosaurPreviewView.prototype.makeEventListener = function () {
  this.container.addEventListener('click', (evt) => {
    const selectedDinosaur = this.dinosaur;
    console.log(selectedDinosaur);
    PubSub.publish('DinosaurPreviewView:selected-dinosaur', selectedDinosaur);
  });
};


module.exports = DinosaurPreviewView;