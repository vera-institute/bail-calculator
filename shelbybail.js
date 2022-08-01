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

function incomeFromBenefitsCompute() {
    var cashBenefitsValue = parseInt(document.getElementById("cashBenefits").value);
    var unemploymentValue = parseInt(document.getElementById("unemployment").value);
    var SSIValue = parseInt(document.getElementById("SSI").value);
    var SSDValue = parseInt(document.getElementById("SSD").value);
    var socialSecurityValue = parseInt(document.getElementById("socialSecurity").value);
    var pensionRetirementValue = parseInt(document.getElementById("pensionRetirement").value);
    var anyOtherIncomeValue = parseInt(document.getElementById("anyOtherIncome").value);

    var totalIncomeFromBenefits = cashBenefitsValue + unemploymentValue + SSIValue + SSDValue + socialSecurityValue + pensionRetirementValue + anyOtherIncomeValue;

    if (totalIncomeFromBenefits) {
        document.getElementById("totalIncomeFromBenefits").innerHTML = totalIncomeFromBenefits;
    }
    else {
        document.getElementById("totalIncomeFromBenefits").innerHTML = "0";
        // document.getElementById("totalIncomeFromBenefits").innerHTML = "Please Enter Values";
    }
    document.getElementById("total_benefits").innerText = totalIncomeFromBenefits
    // console.log(totalIncomeFromBenefits)
}
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
var totalExpenses;

function expensesCompute() {
    var housingValue = parseInt(document.getElementById("payHousing").value);
    var electricityGasValue = parseInt(document.getElementById("payElectricityGas").value);
    var foodGroceryValue = parseInt(document.getElementById("payFoodGrocery").value);
    var transportationValue = parseInt(document.getElementById("payTransportation").value);
    var phoneValue = parseInt(document.getElementById("payPhone").value);
    var studentLoansValue = parseInt(document.getElementById("payStudentLoans").value);
    var childSupportValue = parseInt(document.getElementById("payChildSupport").value);
    var medicalValue = parseInt(document.getElementById("payMedical").value);
    var tvInternetValue = parseInt(document.getElementById("payTvInternet").value);
    var otherValue = parseInt(document.getElementById("payOther").value);

    var totalExpenses = housingValue + electricityGasValue + foodGroceryValue + transportationValue + phoneValue + studentLoansValue + childSupportValue + medicalValue + tvInternetValue + otherValue;

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