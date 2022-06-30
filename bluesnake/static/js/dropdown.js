function PressDropdown()
{
    var isActive = $("#dropdown-check").prop('checked');
    if (isActive) {
        $("#dropdown-check").prop('checked', false);
        $("#close").css("display", "none");
        $("#open").css("display", "flex");
        $("#dropdown-menu #dropdown-content").css("transform", "translateX(-100%)");
    }
    else {
        $("#dropdown-check").prop('checked', true);
        $("#open").css("display", "none");
        $("#close").css("display", "flex");
        $("#dropdown-menu #dropdown-content").css("transform", "translateX(0%)");
    }
}
