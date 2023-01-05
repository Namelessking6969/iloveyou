    let anniversayDate = new Date();
    anniversayDate.setFullYear(2020, 5, 25);
    let today = new Date();
    let yearsTogether = today.getFullYear() - anniversayDate.getFullYear();

    alert(We have been married for ${yearsTogether} years!);