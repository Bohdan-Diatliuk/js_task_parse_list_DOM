'use strict';

const list = document.querySelector('ul');

function getSalary(li) {
  return Number(li.dataset.salary.replace(/[^\d]/g, ''));
}

function sortList(ul) {
  const items = Array.from(ul.children);

  items.sort((a, b) => getSalary(b) - getSalary(a));
  items.forEach((item) => ul.appendChild(item));
}

function getEmployees(ul) {
  return Array.from(list.children).map((li) => {
    return {
      name: li.textContent.trim(),
      salary: getSalary(li),
    };
  });
}

sortList(list);

const employees = getEmployees(list);

// eslint-disable-next-line no-console
console.log(employees);
