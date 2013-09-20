// Javascript to change the logo to the left in the SuiteBar

if (location.hostname == "tahoe.sharepoint.com") {
    // Javascript for Office365/Sharepoint Online
    $(document).ready(function () {
        var companyLogo = document.getElementById("suiteBrandingBox");
        companyLogo.innerHTML = "<a href='https://tahoe.sharepoint.com/SitePages/Home.aspx'><img src='/SiteAssets/tahoe_logo_white_clear_40px_hight.png' height='30px'></a>";
    });
} else {
    // Javascript for Sharepoint 2013 OnSite
    $(document).ready(function () {
        var suitebar = $("#suiteBar");
        var branding = suitebar.find(".ms-core-brandingText");
        branding.html("<a href='https://tahoe.sharepoint.com/SitePages/Home.aspx'><img src='/SiteAssets/tahoe_logo_white_small_transparent.png' height='30px'></a>");
    });
}