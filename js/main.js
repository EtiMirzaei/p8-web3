//     // المان اصلی
//     let root = document.getElementById("root");

//     // دکمه اولیه
//     let btn = document.createElement("button");
//     btn.textContent = "نمایش فرم";
//     btn.classList.add("btn");
//     root.insertAdjacentElement("beforeend", btn);

//     // رویداد دکمه
//     btn.addEventListener("click", function() {
//       btn.disabled = true;

//       // ساخت فرم
//       let form = document.createElement("form");
//       form.classList.add("user-form");

//       // تابع کمکی برای ساخت هر input
//       function makeInput(labelText, id, type = "text") {
//         let div = document.createElement("div");
//         let label = document.createElement("label");
//         label.textContent = labelText;
//         let input = document.createElement("input");
//         input.type = type;
//         input.id = id;
//         div.insertAdjacentElement("beforeend", label);
//         div.insertAdjacentElement("beforeend", input);
//         form.insertAdjacentElement("beforeend", div);
//       }

//       // فیلدها
//       makeInput("نام:", "fname", "text");
//       makeInput("نام خانوادگی:", "lname", "text");

//       // مدرک تحصیلی
//       let divDegree = document.createElement("div");
//       let labelDegree = document.createElement("label");
//       labelDegree.textContent = "مدرک تحصیلی:";
//       let select = document.createElement("select");
//       select.id = "degree";

//       let degrees = ["دیپلم", "کارشناسی", "کارشناسی ارشد", "دکتری"];
//       for (let d of degrees) {
//         let option = document.createElement("option");
//         option.value = d;
//         option.textContent = d;
//         select.insertAdjacentElement("beforeend", option);
//       }

//       divDegree.insertAdjacentElement("beforeend", labelDegree);
//       divDegree.insertAdjacentElement("beforeend", select);
//       form.insertAdjacentElement("beforeend", divDegree);

//       // ساعت کاری و مالیات
//       makeInput("ساعت کاری:", "hours", "number");
//       makeInput("مالیات (%):", "tax", "number");

//       // دکمه‌ها
//       let btnDiv = document.createElement("div");
//       let calcBtn = document.createElement("button");
//       calcBtn.textContent = "محاسبه حقوق";
//       calcBtn.type = "button";
//       calcBtn.classList.add("btn");

//       let closeBtn = document.createElement("button");
//       closeBtn.textContent = "بستن فرم";
//       closeBtn.type = "button";
//       closeBtn.classList.add("btn", "close-btn");

//       btnDiv.insertAdjacentElement("beforeend", calcBtn);
//       btnDiv.insertAdjacentElement("beforeend", closeBtn);
//       form.insertAdjacentElement("beforeend", btnDiv);

//       // اضافه کردن فرم به root
//       root.insertAdjacentElement("beforeend", form);

//       // ایجاد محل نمایش نتیجه
//       let result = document.createElement("h1");
//       root.insertAdjacentElement("beforeend", result);

//       // رویداد محاسبه حقوق
//       calcBtn.addEventListener("click", function() {
//         let fname = document.getElementById("fname").value.trim();
//         let lname = document.getElementById("lname").value.trim();
//         let degree = document.getElementById("degree").value;
//         let hours = parseFloat(document.getElementById("hours").value);
//         let tax = parseFloat(document.getElementById("tax").
// value);

//         if (!fnameisNaN(hours) || isNaN(tax)) {
//           result.textContent = "لطفاً همه مقادیر را کامل وارد کنید.";
//           return;
//         }

//         let rate = 0;
//         if (degree === "دیپلم") rate = 1500000;
//         else if (degree === "کارشناسی") rate = 2500000;
//         else if (degree === "کارشناسی ارشد") rate = 4500000;
//         else if (degree === "دکتری") rate = 6500000;

//         let gross = rate * hours;
//         let net = gross * (1 - tax / 100);

//         result.textContent = `${fname} ${lname}، حقوق شما ${net.toLocaleString()} تومان است.`;
//       });

//       // بستن فرم
//       closeBtn.addEventListener("click", function() {
//         form.remove();
//         result.remove();
//         btn.disabled = false;
//       });
//     });

let root = document.getElementById("root");

let btn = document.createElement("button");
btn.textContent = "نمایش فرم";
btn.classList.add("btn");
root.insertAdjacentElement("beforeend", btn);

btn.addEventListener("click", function () {
  btn.remove();
  btn.disabled = true;

  let form = document.createElement("form");
  form.classList.add("user-form");

  let closeBtn = document.createElement("span");
  closeBtn.innerHTML = "&times;";
  closeBtn.classList.add("close");
  form.insertAdjacentElement("beforeend", closeBtn);

  let divFname = document.createElement("div");
  divFname.innerHTML = "<label>نام:</label><input type='text' id='fname'>";
  form.insertAdjacentElement("beforeend", divFname);

  let divLname = document.createElement("div");
  divLname.innerHTML =
    "<label>نام خانوادگی:</label><input type='text' id='lname'>";
  form.insertAdjacentElement("beforeend", divLname);

  let divDegree = document.createElement("div");
  divDegree.innerHTML = `
        <label>مدرک تحصیلی:</label>
        <select id='degree'>
          <option value='دیپلم'>دیپلم</option>
          <option value='کارشناسی'>کارشناسی</option>
          <option value='کارشناسی ارشد'>کارشناسی ارشد</option>
          <option value='دکتری'>دکتری</option>
        </select>`;
  form.insertAdjacentElement("beforeend", divDegree);

  let divHours = document.createElement("div");
  divHours.innerHTML =
    "<label>ساعت کاری:</label><input type='number' id='hours'>";
  form.insertAdjacentElement("beforeend", divHours);

  let divTax = document.createElement("div");
  divTax.innerHTML = "<label>مالیات (%):</label><input type='number' id='tax'>";
  form.insertAdjacentElement("beforeend", divTax);

  let calcBtn = document.createElement("button");
  calcBtn.type = "button";
  calcBtn.textContent = "محاسبه حقوق";
  calcBtn.classList.add("calcBtn");
  form.insertAdjacentElement("beforeend", calcBtn);

  let result = document.createElement("h1");
  result.textContent = "";

  root.insertAdjacentElement("beforeend", form);
  root.insertAdjacentElement("beforeend", result);

  calcBtn.addEventListener("click", function () {
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let degree = document.getElementById("degree").value;
    let hours = parseFloat(document.getElementById("hours").value);
    let tax = parseFloat(document.getElementById("tax").value);

    let rate;
    if (degree === "دیپلم") rate = 20000;
    else if (degree === "کارشناسی") rate = 30000;
    else if (degree === "کارشناسی ارشد") rate = 40000;
    else if (degree === "دکتری") rate = 50000;

    let salery = rate * hours;
    let pureSalery = salery - (salery * tax) / 100;

    result.textContent = `${fname} ${lname}، حقوق خالص شما ${pureSalery} تومان است.`;
  });

  closeBtn.addEventListener("click", function () {
    form.remove();
    result.remove();
    root.insertAdjacentElement("beforeend", btn)
    btn.disabled = false;
  });
});
