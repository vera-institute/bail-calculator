// salaryBiweeklyOrMonthlyAndRadioButtonsAndInputs
$(document).ready(function () {
    // resetButton
    $("#reset").click(function () {
        location.reload(true);
    });
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

// $(document).ready(function() {
//     $('#biweeklySalary').click(function() {
//         // $("#biweeklyCheck").trigger("reset");
//         // _("biweeklyCheck").reset();
//         $(this).val('0');
//     })
// });
// $(document).ready(function() {
//     $('#monthlySalary').click(function() {
//         $(this).val('0');
//     })
// });

// $(document).ready(function () {
//     $('#biweeklySalary').click(function () {
//         $(this).val(null);
//     });
// });
// $(document).ready(function () {
    // $('#monthlySalary').click(function () {
    //     $(this).val(null);
    // });
    $(document).ready(function () {
    // clear value of input when changing radio input
    $('input[type=radio][name=biweeklymonthly]').change(function () {
        $('#monthlySalary').val(null);
        $('#biweeklySalary').val(null);
        $("#totalIncome").text('0');
        $("#total_income").text('0');
    });
 });



// incomeInputNumberHidden
let biweekly1;
// let hourly2;
let monthly1;

function biweeklyMonthlySalaryCheck() {
    // salary2 = document.getElementById('monthlySalary')
    biweekly1 = document.getElementById('biweeklySalary')
    // hourly2 = document.getElementById('hoursPerWeek')
    monthly1 = document.getElementById('monthlySalary')
    if (document.getElementById('biweeklyCheck').checked) {
        biweekly1.type = 'number';
        // salary1.type = salary2.type = 'hidden';
        monthly1.type = 'hidden';

    } else {
        // salary1.type = salary2.type = 'number';
        monthly1.type = 'number';
        biweekly1.type = 'hidden';
    }
}

// let total = document.getElementById('testTotal')
$(() => {
    let totalIncome = 0, totalBennies = 0, totalAssets = 0, totalExpenses = 0, totalIncomeAndExpenses = 0;
    let affordableBailAmount;
    // let allIncomeAndExpenses = [];

    // totalIncome
    // ,#monthlySalary
    $("#biweeklySalary,#monthlySalary").on('keyup', function () {
        var set = $(this).closest('fieldset');

        var biweekly_salary = $(set).find('#biweeklySalary').val() == '' ? 0 : $(set).find('#biweeklySalary').val();
        // var hours_per_week = $(set).find('#hoursPerWeek').val() == '' ? 0 : $(set).find('#hoursPerWeek').val();
        var monthly_salary = $(set).find('#monthlySalary').val() == '' ? 0 : $(set).find('#monthlySalary').val();
        // var monthly_salary = $(set).find('#monthlySalary').val() == '' ? 0 : $(set).find('#monthlySalary').val();

        // // monthlyIncomeCalculation
        // if (monthly_salary > 0 && monthly1.type === 'number') {
        //     totalIncome = (monthly_salary)
        // } else if (biweekly_salary > 0 && biweekly1.type === 'number') {
        //     totalIncome = ((biweekly_salary) * 2.165)
        // } else {
        //     totalIncome = "0";
        // }
        // monthlyIncomeCalculation
        if (biweekly_salary > 0 && biweekly1.type === 'number') {
            totalIncome = ((biweekly_salary) * 2)
        } else if (monthly_salary > 0 && monthly1.type === 'number') {
            totalIncome = (monthly_salary)
        } else {
            totalIncome = "0";
        }
        console.log(totalIncome)

        // totalIncome = parseInt(isNaN(totalIncome) ? 0 : totalIncome)
        totalIncome = Math.round(parseFloat(isNaN(totalIncome) ? 0 : totalIncome))

        $(set).find('#totalIncome').text(addCommas(totalIncome));
        $("#total_income").text(addCommas(totalIncome))
        // allIncomeAndExpenses.push(totalIncome)
        totalIncomeAndExpenses = totalIncome + totalBennies + totalAssets - totalExpenses
        $("#total_income_and_expenses").text(addCommas(+totalIncomeAndExpenses))

        if (totalIncomeAndExpenses <= 0) {
            affordableBailAmount = totalIncomeAndExpenses * 0;
        } else if (1 <= totalIncomeAndExpenses && totalIncomeAndExpenses <= 100) {
            affordableBailAmount = totalIncomeAndExpenses * 0.50;
        } else if (101 <= totalIncomeAndExpenses && totalIncomeAndExpenses <= 200) {
            affordableBailAmount = totalIncomeAndExpenses * 0.55;
        } else if (201 <= totalIncomeAndExpenses && totalIncomeAndExpenses <= 300) {
            affordableBailAmount = totalIncomeAndExpenses * 0.60
        } else if (301 <= totalIncomeAndExpenses && totalIncomeAndExpenses <= 400) {
            affordableBailAmount = totalIncomeAndExpenses * 0.65;
        } else if (401 <= totalIncomeAndExpenses && totalIncomeAndExpenses <= 500) {
            affordableBailAmount = totalIncomeAndExpenses * 0.70;
        } else {
            affordableBailAmount = totalIncomeAndExpenses * 0.75;
        }
        affordableBailAmount = Math.round(parseFloat(isNaN(affordableBailAmount) ? 0 : affordableBailAmount))
        // affordableBailAmount = parseInt(isNaN(affordableBailAmount) ? 0 : affordableBailAmount)
        $("#affordable_bail_amount").text(addCommas(+affordableBailAmount))
    });

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

        totalBennies = Math.round(parseFloat(isNaN(cash_benefits) ? 0 : cash_benefits) + parseFloat(isNaN(unemployment) ? 0 : unemployment) + parseFloat(isNaN(ssi) ? 0 : ssi) + parseFloat(isNaN(ssd) ? 0 : ssd) + parseFloat(isNaN(social) ? 0 : social) + parseFloat(isNaN(pension) ? 0 : pension) + parseFloat(isNaN(other) ? 0 : other))
        // totalBennies = parseInt(isNaN(cash_benefits) ? 0 : cash_benefits) + parseInt(isNaN(unemployment) ? 0 : unemployment) + parseInt(isNaN(ssi) ? 0 : ssi) + parseInt(isNaN(ssd) ? 0 : ssd) + parseInt(isNaN(social) ? 0 : social) + parseInt(isNaN(pension) ? 0 : pension) + parseInt(isNaN(other) ? 0 : other)

        $(set).find('#totalIncomeFromBenefits').text(addCommas(totalBennies));

        $("#total_benefits").text(addCommas(totalBennies))
        // allIncomeAndExpenses.push(totalBennies)
        totalIncomeAndExpenses = totalIncome + totalBennies + totalAssets - totalExpenses
        $("#total_income_and_expenses").text(addCommas(+totalIncomeAndExpenses))

        if (totalIncomeAndExpenses <= 0) {
            affordableBailAmount = totalIncomeAndExpenses * 0;
        } else if (1 <= totalIncomeAndExpenses && totalIncomeAndExpenses <= 100) {
            affordableBailAmount = totalIncomeAndExpenses * 0.50;
        } else if (101 <= totalIncomeAndExpenses && totalIncomeAndExpenses <= 200) {
            affordableBailAmount = totalIncomeAndExpenses * 0.55;
        } else if (201 <= totalIncomeAndExpenses && totalIncomeAndExpenses <= 300) {
            affordableBailAmount = totalIncomeAndExpenses * 0.60
        } else if (301 <= totalIncomeAndExpenses && totalIncomeAndExpenses <= 400) {
            affordableBailAmount = totalIncomeAndExpenses * 0.65;
        } else if (401 <= totalIncomeAndExpenses && totalIncomeAndExpenses <= 500) {
            affordableBailAmount = totalIncomeAndExpenses * 0.70;
        } else {
            affordableBailAmount = totalIncomeAndExpenses * 0.75;
        }

        affordableBailAmount = Math.round(parseFloat(isNaN(affordableBailAmount) ? 0 : affordableBailAmount))
        // affordableBailAmount = parseInt(isNaN(affordableBailAmount) ? 0 : affordableBailAmount)
        $("#affordable_bail_amount").text(addCommas(+affordableBailAmount))
    });

    // totalLiquidAssets
    // ,#otherAssets
    $("#checkingAccount,#savingsAccount,#cashAvailableNow").on('keyup', function () {
        var set = $(this).closest('fieldset');

        var checking_account = $(set).find('#checkingAccount').val() == '' ? 0 : $(set).find('#checkingAccount').val();
        var savings_account = $(set).find('#savingsAccount').val() == '' ? 0 : $(set).find('#savingsAccount').val();
        var cash_available_now = $(set).find('#cashAvailableNow').val() == '' ? 0 : $(set).find('#cashAvailableNow').val();
        // var other_assets = $(set).find('#otherAssets').val() == '' ? 0 : $(set).find('#otherAssets').val();

        totalAssets = Math.round(parseFloat(isNaN(checking_account) ? 0 : checking_account) + parseFloat(isNaN(savings_account) ? 0 : savings_account) + parseFloat(isNaN(cash_available_now) ? 0 : cash_available_now))
        // + parseFloat(isNaN(other_assets) ? 0 : other_assets)
        // totalAssets = parseInt(isNaN(checking_account) ? 0 : checking_account) + parseInt(isNaN(savings_account) ? 0 : savings_account) + parseInt(isNaN(cash_available_now) ? 0 : cash_available_now) + parseInt(isNaN(other_assets) ? 0 : other_assets)

        $(set).find('#totalLiquidAssets').text(addCommas(totalAssets));

        $("#total_assets").text(addCommas(totalAssets))
        // allIncomeAndExpenses.push(totalAssets)
        totalIncomeAndExpenses = totalIncome + totalBennies + totalAssets - totalExpenses
        $("#total_income_and_expenses").text(addCommas(totalIncomeAndExpenses))

        if (totalIncomeAndExpenses <= 0) {
            affordableBailAmount = totalIncomeAndExpenses * 0;
        } else if (1 <= totalIncomeAndExpenses && totalIncomeAndExpenses <= 100) {
            affordableBailAmount = totalIncomeAndExpenses * 0.50;
        } else if (101 <= totalIncomeAndExpenses && totalIncomeAndExpenses <= 200) {
            affordableBailAmount = totalIncomeAndExpenses * 0.55;
        } else if (201 <= totalIncomeAndExpenses && totalIncomeAndExpenses <= 300) {
            affordableBailAmount = totalIncomeAndExpenses * 0.60
        } else if (301 <= totalIncomeAndExpenses && totalIncomeAndExpenses <= 400) {
            affordableBailAmount = totalIncomeAndExpenses * 0.65;
        } else if (401 <= totalIncomeAndExpenses && totalIncomeAndExpenses <= 500) {
            affordableBailAmount = totalIncomeAndExpenses * 0.70;
        } else {
            affordableBailAmount = totalIncomeAndExpenses * 0.75;
        }

        affordableBailAmount = Math.round(parseFloat(isNaN(affordableBailAmount) ? 0 : affordableBailAmount))
        // affordableBailAmount = parseInt(isNaN(affordableBailAmount) ? 0 : affordableBailAmount)
        $("#affordable_bail_amount").text(addCommas(+affordableBailAmount))
    });

    // totalExpenses
    $("#payHousing,#payElectricityGas,#payFoodGrocery,#payPublicTransit, #paycarPaymentInsurance, #payGas, #payPhone,#payStudentLoans,#payChildSupport,#payMedical,#payTvInternet,#payOther").on('keyup', function () {
        var set = $(this).closest('fieldset');

        var housing = $(set).find('#payHousing').val() == '' ? 0 : $(set).find('#payHousing').val();
        var electricity_gas = $(set).find('#payElectricityGas').val() == '' ? 0 : $(set).find('#payElectricityGas').val();
        var food_grocery = $(set).find('#payFoodGrocery').val() == '' ? 0 : $(set).find('#payFoodGrocery').val();
        var public_transit = $(set).find('#payPublicTransit').val() == '' ? 0 : $(set).find('#payPublicTransit').val();
        var car_payment_insurance = $(set).find('#paycarPaymentInsurance').val() == '' ? 0 : $(set).find('#paycarPaymentInsurance').val();
        var gas = $(set).find('#payGas').val() == '' ? 0 : $(set).find('#payGas').val();
        var phone = $(set).find('#payPhone').val() == '' ? 0 : $(set).find('#payPhone').val();
        var student_loans = $(set).find('#payStudentLoans').val() == '' ? 0 : $(set).find('#payStudentLoans').val();
        var child_support = $(set).find('#payChildSupport').val() == '' ? 0 : $(set).find('#payChildSupport').val();
        var medical = $(set).find('#payMedical').val() == '' ? 0 : $(set).find('#payMedical').val();
        var tv_internet = $(set).find('#payTvInternet').val() == '' ? 0 : $(set).find('#payTvInternet').val();
        var other = $(set).find('#payOther').val() == '' ? 0 : $(set).find('#payOther').val();

        totalExpenses = Math.round(parseFloat(isNaN(housing) ? 0 : housing) + parseFloat(isNaN(electricity_gas) ? 0 : electricity_gas) + parseFloat(isNaN(food_grocery) ? 0 : food_grocery) + parseFloat(isNaN(public_transit) ? 0 : public_transit) + parseFloat(isNaN(car_payment_insurance) ? 0 : car_payment_insurance) + parseFloat(isNaN(gas) ? 0 : gas) + parseFloat(isNaN(phone) ? 0 : phone) + parseFloat(isNaN(student_loans) ? 0 : student_loans) + parseFloat(isNaN(child_support) ? 0 : child_support) + parseFloat(isNaN(medical) ? 0 : medical) + parseFloat(isNaN(tv_internet) ? 0 : tv_internet) + parseFloat(isNaN(other) ? 0 : other))
        // totalExpenses = parseInt(isNaN(housing) ? 0 : housing) + parseInt(isNaN(electricity_gas) ? 0 : electricity_gas) + parseInt(isNaN(food_grocery) ? 0 : food_grocery) + parseInt(isNaN(transportation) ? 0 : transportation) + parseInt(isNaN(phone) ? 0 : phone) + parseInt(isNaN(student_loans) ? 0 : student_loans) + parseInt(isNaN(child_support) ? 0 : child_support) + parseInt(isNaN(medical) ? 0 : medical) + parseInt(isNaN(tv_internet) ? 0 : tv_internet) + parseInt(isNaN(other) ? 0 : other)

        $(set).find('#totalExpenses').text(addCommas(totalExpenses));

        $("#total_expenses").text(addCommas(totalExpenses))
        // allIncomeAndExpenses.push(totalExpenses)
        totalIncomeAndExpenses = totalIncome + totalBennies + totalAssets - totalExpenses

        $("#total_income_and_expenses").text(addCommas(totalIncomeAndExpenses))

        if (totalIncomeAndExpenses <= 0) {
            affordableBailAmount = totalIncomeAndExpenses * 0;
        } else if (1 <= totalIncomeAndExpenses && totalIncomeAndExpenses <= 100) {
            affordableBailAmount = totalIncomeAndExpenses * 0.50;
        } else if (101 <= totalIncomeAndExpenses && totalIncomeAndExpenses <= 200) {
            affordableBailAmount = totalIncomeAndExpenses * 0.55;
        } else if (201 <= totalIncomeAndExpenses && totalIncomeAndExpenses <= 300) {
            affordableBailAmount = totalIncomeAndExpenses * 0.60
        } else if (301 <= totalIncomeAndExpenses && totalIncomeAndExpenses <= 400) {
            affordableBailAmount = totalIncomeAndExpenses * 0.65;
        } else if (401 <= totalIncomeAndExpenses && totalIncomeAndExpenses <= 500) {
            affordableBailAmount = totalIncomeAndExpenses * 0.70;
        } else {
            affordableBailAmount = totalIncomeAndExpenses * 0.75;
        }

        affordableBailAmount = Math.round(parseFloat(isNaN(affordableBailAmount) ? 0 : affordableBailAmount))
        // affordableBailAmount = parseInt(isNaN(affordableBailAmount) ? 0 : affordableBailAmount)
        $("#affordable_bail_amount").text(addCommas(+affordableBailAmount))
    });
});
function addCommas(x) {
    var parts = x.toString().split('.')
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    return parts.join('.')
};