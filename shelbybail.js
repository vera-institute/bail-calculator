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

var totalIncome

function incomeCompute() {
    var hourlyWageValue = parseInt(document.getElementById("hourlyWage").value);
    var hoursPerWeekValue = parseInt(document.getElementById("hoursPerWeek").value);
    var annualSalaryValue = parseInt(document.getElementById("annualSalary").value);
    var monthlySalaryValue = parseInt(document.getElementById("monthlySalary").value);

    // var totalIncome = ((hourlyWageValue * hoursPerWeekValue)*4);

    if (annualSalaryValue > 0) {
        totalIncome = (annualSalaryValue / 12)
    } else if (hourlyWageValue > 0) {
        totalIncome = ((hourlyWageValue * hoursPerWeekValue) * 4)
    } else {
        totalIncome = "Please Enter Values";
    }
    document.getElementById("totalIncome").innerHTML = totalIncome
    document.getElementById("total_income").innerText = totalIncome
    // console.log(totalIncome)
}

// incomeFromBenefits
var totalIncomeFromBenefits

$(() => {
    $("#cashBenefits,#unemployment,#SSI,#SSD,#socialSecurity,#pensionRetirement,#anyOtherIncome").on('keyup', function () {
        var set = $(this).closest('fieldset');

        var cash_benefits = $(set).find('#cashBenefits').val() == '' ? 0 : $(set).find('#cashBenefits').val();
        var unemployment = $(set).find('#unemployment').val() == '' ? 0 : $(set).find('#unemployment').val();
        var ssi = $(set).find('#SSI').val() == '' ? 0 : $(set).find('#SSI').val();
        var ssd = $(set).find('#SSD').val() == '' ? 0 : $(set).find('#SSD').val();
        var social = $(set).find('#socialSecurity').val() == '' ? 0 : $(set).find('#socialSecurity').val();
        var pension = $(set).find('#pensionRetirement').val() == '' ? 0 : $(set).find('#pensionRetirement').val();
        var other = $(set).find('#anyOtherIncome').val() == '' ? 0 : $(set).find('#anyOtherIncome').val();

        $(set).find('#totalIncomeFromBenefits').text(parseInt(isNaN(cash_benefits) ? 0 : cash_benefits) + parseInt(isNaN(unemployment) ? 0 : unemployment) + parseInt(isNaN(ssi) ? 0 : ssi) + parseInt(isNaN(ssd) ? 0 : ssd) + parseInt(isNaN(social) ? 0 : social) + parseInt(isNaN(pension) ? 0 : pension) + parseInt(isNaN(other) ? 0 : other));
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
var totalLiquidAssets

function liquidAssetsCompute() {
    var checkingAccountValue = parseInt(document.getElementById("checkingAccount").value);
    var savingsAccountValue = parseInt(document.getElementById("savingsAccount").value);
    var cashAvailableNowValue = parseInt(document.getElementById("cashAvailableNow").value);
    var otherAssetsValue = parseInt(document.getElementById("otherAssets").value);

    var totalLiquidAssets = checkingAccountValue + savingsAccountValue + cashAvailableNowValue + otherAssetsValue;

    if (totalLiquidAssets) {
        document.getElementById("totalLiquidAssets").innerHTML = totalLiquidAssets;
    }
    else {
        document.getElementById("totalLiquidAssets").innerHTML = "0";
        // document.getElementById("totalLiquidAssets").innerHTML = "Please Enter Values";
    }
    document.getElementById("total_assets").innerText = totalLiquidAssets
    // console.log (totalLiquidAssets)
    return(totalLiquidAssets)
}

// Expenses
let totalExpenses, housingValue, electricityGasValue, foodGroceryValue, transportationValue, phoneValue, studentLoansValue, childSupportValue, medicalValue, tvInternetValue, otherValue

function expensesCompute() {
    housingValue = parseInt(document.getElementById("payHousing").value);
    electricityGasValue = parseInt(document.getElementById("payElectricityGas").value);
    foodGroceryValue = parseInt(document.getElementById("payFoodGrocery").value);
    transportationValue = parseInt(document.getElementById("payTransportation").value);
    phoneValue = parseInt(document.getElementById("payPhone").value);
    studentLoansValue = parseInt(document.getElementById("payStudentLoans").value);
    childSupportValue = parseInt(document.getElementById("payChildSupport").value);
    medicalValue = parseInt(document.getElementById("payMedical").value);
    tvInternetValue = parseInt(document.getElementById("payTvInternet").value);
    otherValue = parseInt(document.getElementById("payOther").value);

    totalExpenses = housingValue + electricityGasValue + foodGroceryValue + transportationValue + phoneValue + studentLoansValue + childSupportValue + medicalValue + tvInternetValue + otherValue;

    if (totalExpenses) {
        document.getElementById("totalExpenses").innerHTML = totalExpenses;
    }
    else {
        document.getElementById("totalExpenses").innerHTML = "0";
        // document.getElementById("totalExpenses").innerHTML = "Please Enter Values";
    }
    document.getElementById("total_expenses").innerText = totalExpenses
    console.log(totalExpenses)
}