export function print(what){
    console.log(what)
}

export function set_webName(what){
  document.title = what;
}

export function fav_icon(src){
  const linkElement = document.querySelector('link[rel="shortcut icon"]');

  if (linkElement) {
    // If a favicon link element already exists, update its href attribute.
    linkElement.href = src;
  } else {
    // If a favicon link element doesn't exist, create a new one and add it to the document head.
    const newLinkElement = document.createElement('link');
    newLinkElement.rel = 'shortcut icon';
    newLinkElement.href = src;
    document.head.appendChild(newLinkElement);
  }
}

export function make(elementType) {
  let element = document.createElement(elementType);

  return {
    from: function (id) {
      element.id = id;
      return this;
    },
    to: function (parentSelector) {
      let parent = document.querySelector(parentSelector);
      if (!parent) {
        throw new Error("Parent element not found.");
      }
      parent.appendChild(element);
      return this;
    },
    content: function (textContent) {
      element.textContent = textContent;
      return this;
    },
    build: function () {
      return element;
    },
  };
}

export function img(imageSrc) {
  let imageElement = document.createElement('img');
  imageElement.src = imageSrc;

  return {
    from: function (imageId) {
      imageElement.id = imageId;
      return this;
    },
    to: function (parentSelector) {
      let parentElement = document.querySelector(parentSelector);
      if (!parentElement) {
        throw new Error("Parent element not found.");
      }
      parentElement.appendChild(imageElement);
      return this;
    },
    build: function () {
      return imageElement;
    },
  };
}

export function id(selector) {
  const element = document.getElementById(selector);

  return {
    addClass: function(className) {
      if (element && !element.classList.contains(className)) {
        element.classList.add(className);
      }
      return this;
    },
    removeClass: function(className) {
      if (element && element.classList.contains(className)) {
        element.classList.remove(className);
      }
      return this;
    },
    getElement: function() {
      return element;
    }
  };
}

export async function readJSONFile(fileUrl) {
  try {
    const response = await fetch(fileUrl);
    if (!response.ok) {
      throw new Error(`Error reading JSON file. Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error reading JSON file:", error);
    return null;
  }
}

export function openLink(url) {
  window.open(url, "_blank");
}
