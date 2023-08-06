function sumSalary(salaries) {
  let salary = 0;
  for (key in salaries)  {
    if (typeof (salaries[key]) == "number" && Number.isNaN(salaries[key]) == false && Number.isFinite(salaries[key]) == true) {
      salary = salary + salaries[key]
    }
  }
  return salary
  }

