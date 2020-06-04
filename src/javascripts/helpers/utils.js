const printToDom = (selector, text) => {
  $(selector).html(text);
  console.error('this works');
};

export default { printToDom };
