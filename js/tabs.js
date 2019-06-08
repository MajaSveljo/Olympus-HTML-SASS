let openTab = (event, tabNumber) => {
    const tabHeaders =
    document.getElementsByClassName("tab");

    const tabContent = 
    document.getElementsByClassName("tab-content");

    for (let tab of tabHeaders){
        tab.firstChild.style.color = "#ccc";
    }

    for (let tab of tabContent){
        tab.style.display = "none";
    }

    document.getElementById(tabNumber).style.display = "block";
    tabHeaders[tabNumber - 1].firstChild.style.color = "rgba(255, 51, 0, 0.95)";
}