// incomeHourlyOrSalaryAndRadioButtonsAndInputs
$(document).ready(function () {
    $(".radioSelect").each(function () {
        showSpecificFields(this);
    });
    $(".radioSelect").click(function () {
        showSpecificFields(this);
    });
});
function showSpecificFields(obj) {
    if ($(obj).is(":checked")) {
        var radioVal = $(obj).val();
        $(".fieldsSpecific").each(function () {
            if ($(this).attr('id') == radioVal) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    }
}

// income
function hourlySalaryCheck() {
    hourly1 = document.getElementById('hourlyWage')
    hourly2 = document.getElementById('hoursPerWeek')
    salary1 = document.getElementById('annualSalary')
    salary2 = document.getElementById('monthlySalary')

    if (document.getElementById('hourlyCheck').checked) {
        hourly1.type = hourly2.type = 'number';
        salary1.type = salary2.type = 'hidden';
    } else {
        salary1.type = salary2.type = 'number';
        hourly1.type = hourly2.type = 'hidden';
    }
}

// var totalIncome

// function incomeCompute() {
//     var hourlyWageValue = parseInt(document.getElementById("hourlyWage").value);
//     var hoursPerWeekValue = parseInt(document.getElementById("hoursPerWeek").value);
//     var annualSalaryValue = parseInt(document.getElementById("annualSalary").value);
//     var monthlySalaryValue = parseInt(document.getElementById("monthlySalary").value);

//     // var totalIncome = ((hourlyWageValue * hoursPerWeekValue)*4);

//     if (annualSalaryValue > 0) {
//         totalIncome = (annualSalaryValue / 12)
//     } else if (hourlyWageValue > 0) {
//         totalIncome = ((hourlyWageValue * hoursPerWeekValue) * 4)
//     } else {
//         totalIncome = "Please Enter Values";
//     }
//     document.getElementById("totalIncome").innerHTML = totalIncome
//     document.getElementById("total_income").innerText = totalIncome
//     // console.log(totalIncome)
// }

// var totalIncome, totalIncomeFromBenefits, totalLiquidAssets, totalExpenses;
let total = document.getElementById('testTotal')
$(() => {
    let totalIncome = 0, totalBennies = 0, totalAssets = 0, totalExpenses = 0, testTotal = 0;
    let allIncomeAndExpenses = [];

    // totalIncome
    $("#hourlyWage,#hoursPerWeek,#annualSalary,#monthlySalary").on('keyup', function () {

        var set = $(this).closest('fieldset');

        var hourly_wage = $(set).find('#hourlyWage').val() == '' ? 0 : $(set).find('#hourlyWage').val();
        var hours_per_week = $(set).find('#hoursPerWeek').val() == '' ? 0 : $(set).find('#hoursPerWeek').val();
        var annual_salary = $(set).find('#annualSalary').val() == '' ? 0 : $(set).find('#annualSalary').val();
        var monthly_salary = $(set).find('#monthlySalary').val() == '' ? 0 : $(set).find('#monthlySalary').val();

        // totalIncome = parseInt(isNaN(hourly_wage) ? 0 : hourly_wage) + parseInt(isNaN(hours_per_week) ? 0 : hours_per_week) + parseInt(isNaN(annual_salary) ? 0 : annual_salary) + parseInt(isNaN(monthly_salary) ? 0 : monthly_salary)

        // income
        if (annual_salary > 0) {
            totalIncome = (annual_salary / 12)
        } else if (hourly_wage > 0) {
            totalIncome = ((hourly_wage * hours_per_week) * 4)
        } else {
            totalIncome = "0";
        }


        $(set).find('#totalIncome').text(totalIncome);
        $("#total_income").text(totalIncome)
        allIncomeAndExpenses.push(totalIncome)
        testTotal = totalIncome + totalBennies + totalAssets - totalExpenses
        $("#testTotal").text(testTotal)



    });
    console.log(totalIncome)
    // totalIncomeFromBenefits
    $("#cashBenefits,#unemployment,#SSI,#SSD,#socialSecurity,#pensionRetirement,#anyOtherIncome").on('keyup', function () {
        var set = $(this).closest('fieldset');

        var cash_benefits = $(set).find('#cashBenefits').val() == '' ? 0 : $(set).find('#cashBenefits').val();
        var unemployment = $(set).find('#unemployment').val() == '' ? 0 : $(set).find('#unemployment').val();
        var ssi = $(set).find('#SSI').val() == '' ? 0 : $(set).find('#SSI').val();
        var ssd = $(set).find('#SSD').val() == '' ? 0 : $(set).find('#SSD').val();
        var social = $(set).find('#socialSecurity').val() == '' ? 0 : $(set).find('#socialSecurity').val();
        var pension = $(set).find('#pensionRetirement').val() == '' ? 0 : $(set).find('#pensionRetirement').val();
        var other = $(set).find('#anyOtherIncome').val() == '' ? 0 : $(set).find('#anyOtherIncome').val();

        totalBennies = parseInt(isNaN(cash_benefits) ? 0 : cash_benefits) + parseInt(isNaN(unemployment) ? 0 : unemployment) + parseInt(isNaN(ssi) ? 0 : ssi) + parseInt(isNaN(ssd) ? 0 : ssd) + parseInt(isNaN(social) ? 0 : social) + parseInt(isNaN(pension) ? 0 : pension) + parseInt(isNaN(other) ? 0 : other)


        $(set).find('#totalIncomeFromBenefits').text(totalBennies);

        $("#total_benefits").text(totalBennies)
        allIncomeAndExpenses.push(totalBennies)
        testTotal = totalIncome + totalBennies + totalAssets - totalExpenses
        $("#testTotal").text(testTotal)
    });

    // totalLiquidAssets
    $("#checkingAccount,#savingsAccount,#cashAvailableNow,#otherAssets").on('keyup', function () {
        var set = $(this).closest('fieldset');

        var checking_account = $(set).find('#checkingAccount').val() == '' ? 0 : $(set).find('#checkingAccount').val();
        var savings_account = $(set).find('#savingsAccount').val() == '' ? 0 : $(set).find('#savingsAccount').val();
        var cash_available_now = $(set).find('#cashAvailableNow').val() == '' ? 0 : $(set).find('#cashAvailableNow').val();
        var other_assets = $(set).find('#otherAssets').val() == '' ? 0 : $(set).find('#otherAssets').val();

        totalAssets = parseInt(isNaN(checking_account) ? 0 : checking_account) + parseInt(isNaN(savings_account) ? 0 : savings_account) + parseInt(isNaN(cash_available_now) ? 0 : cash_available_now) + parseInt(isNaN(other_assets) ? 0 : other_assets)


        $(set).find('#totalLiquidAssets').text(totalAssets);

        $("#total_assets").text(totalAssets)
        allIncomeAndExpenses.push(totalAssets)
        testTotal = totalIncome + totalBennies + totalAssets - totalExpenses
        $("#testTotal").text(testTotal)
    });

    // totalExpenses
    $("#payHousing,#payElectricityGas,#payFoodGrocery,#payTransportation,#payPhone,#payStudentLoans,#payChildSupport,#payMedical,#payTvInternet,#payOther").on('keyup', function () {
        var set = $(this).closest('fieldset');

        var housing = $(set).find('#payHousing').val() == '' ? 0 : $(set).find('#payHousing').val();
        var electricity_gas = $(set).find('#payElectricityGas').val() == '' ? 0 : $(set).find('#payElectricityGas').val();
        var food_grocery = $(set).find('#payFoodGrocery').val() == '' ? 0 : $(set).find('#payFoodGrocery').val();
        var transportation = $(set).find('#payTransportation').val() == '' ? 0 : $(set).find('#payTransportation').val();
        var phone = $(set).find('#payPhone').val() == '' ? 0 : $(set).find('#payPhone').val();
        var student_loans = $(set).find('#payStudentLoans').val() == '' ? 0 : $(set).find('#payStudentLoans').val();
        var child_support = $(set).find('#payChildSupport').val() == '' ? 0 : $(set).find('#payChildSupport').val();
        var medical = $(set).find('#payMedical').val() == '' ? 0 : $(set).find('#payMedical').val();
        var tv_internet = $(set).find('#payTvInternet').val() == '' ? 0 : $(set).find('#payTvInternet').val();
        var other = $(set).find('#payOther').val() == '' ? 0 : $(set).find('#payOther').val();

        totalExpenses = parseInt(isNaN(housing) ? 0 : housing) + parseInt(isNaN(electricity_gas) ? 0 : electricity_gas) + parseInt(isNaN(food_grocery) ? 0 : food_grocery) + parseInt(isNaN(transportation) ? 0 : transportation) + parseInt(isNaN(phone) ? 0 : phone) + parseInt(isNaN(student_loans) ? 0 : student_loans) + parseInt(isNaN(child_support) ? 0 : child_support) + parseInt(isNaN(medical) ? 0 : medical) + parseInt(isNaN(tv_internet) ? 0 : tv_internet) + parseInt(isNaN(other) ? 0 : other)


        $(set).find('#totalExpenses').text(totalExpenses);

        $("#total_expenses").text(totalExpenses)
        allIncomeAndExpenses.push(totalExpenses)
        testTotal = totalIncome + totalBennies + totalAssets - totalExpenses
        $("#testTotal").text(testTotal)
    });

});






// function incomeFromBenefitsCompute() {
//     var cashBenefitsValue = parseInt(document.getElementById("cashBenefits").value);
//     var unemploymentValue = parseInt(document.getElementById("unemployment").value);
//     var SSIValue = parseInt(document.getElementById("SSI").value);
//     var SSDValue = parseInt(document.getElementById("SSD").value);
//     var socialSecurityValue = parseInt(document.getElementById("socialSecurity").value);
//     var pensionRetirementValue = parseInt(document.getElementById("pensionRetirement").value);
//     var anyOtherIncomeValue = parseInt(document.getElementById("anyOtherIncome").value);

//     var totalIncomeFromBenefits = cashBenefitsValue + unemploymentValue + SSIValue + SSDValue + socialSecurityValue + pensionRetirementValue + anyOtherIncomeValue;

//     if (totalIncomeFromBenefits) {
//         document.getElementById("totalIncomeFromBenefits").innerHTML = totalIncomeFromBenefits;
//     }
//     else {
//         document.getElementById("totalIncomeFromBenefits").innerHTML = "0";
//         // document.getElementById("totalIncomeFromBenefits").innerHTML = "Please Enter Values";
//     }
//     document.getElementById("total_benefits").innerText = totalIncomeFromBenefits
//     // console.log(totalIncomeFromBenefits)
// }
// liquidAssets
// var totalLiquidAssets

// function liquidAssetsCompute() {
//     var checkingAccountValue = parseInt(document.getElementById("checkingAccount").value);
//     var savingsAccountValue = parseInt(document.getElementById("savingsAccount").value);
//     var cashAvailableNowValue = parseInt(document.getElementById("cashAvailableNow").value);
//     var otherAssetsValue = parseInt(document.getElementById("otherAssets").value);

//     var totalLiquidAssets = checkingAccountValue + savingsAccountValue + cashAvailableNowValue + otherAssetsValue;

//     if (totalLiquidAssets) {
//         document.getElementById("totalLiquidAssets").innerHTML = totalLiquidAssets;
//     }
//     else {
//         document.getElementById("totalLiquidAssets").innerHTML = "0";
//         // document.getElementById("totalLiquidAssets").innerHTML = "Please Enter Values";
//     }
//     document.getElementById("total_assets").innerText = totalLiquidAssets
//     // console.log (totalLiquidAssets)
//     return (totalLiquidAssets)
// }

// // Expenses
// let totalExpenses, housingValue, electricityGasValue, foodGroceryValue, transportationValue, phoneValue, studentLoansValue, childSupportValue, medicalValue, tvInternetValue, otherValue

// function expensesCompute() {
//     housingValue = parseInt(document.getElementById("payHousing").value);
//     electricityGasValue = parseInt(document.getElementById("payElectricityGas").value);
//     foodGroceryValue = parseInt(document.getElementById("payFoodGrocery").value);
//     transportationValue = parseInt(document.getElementById("payTransportation").value);
//     phoneValue = parseInt(document.getElementById("payPhone").value);
//     studentLoansValue = parseInt(document.getElementById("payStudentLoans").value);
//     childSupportValue = parseInt(document.getElementById("payChildSupport").value);
//     medicalValue = parseInt(document.getElementById("payMedical").value);
//     tvInternetValue = parseInt(document.getElementById("payTvInternet").value);
//     otherValue = parseInt(document.getElementById("payOther").value);

//     totalExpenses = housingValue + electricityGasValue + foodGroceryValue + transportationValue + phoneValue + studentLoansValue + childSupportValue + medicalValue + tvInternetValue + otherValue;

//     if (totalExpenses) {
//         document.getElementById("totalExpenses").innerHTML = totalExpenses;
//     }
//     else {
//         document.getElementById("totalExpenses").innerHTML = "0";
//         // document.getElementById("totalExpenses").innerHTML = "Please Enter Values";
//     }
//     document.getElementById("total_expenses").innerText = totalExpenses
//     console.log(totalExpenses)
// }