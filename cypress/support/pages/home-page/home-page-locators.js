module.exports = {
    datatestid: {
        imageCompanyLogo: '//*[@id="nava"]',
        categori: '//*[@id="cat"]',
        nameofUser: '//*[@id="nameofuser"]',
        narvbark: '//*[@id="narvbarx"]',
        bodyproduk: '//*[@id="tbodyid"]',
        footbar: '//*[@id="footc"]',
        button: (buttonType) => `//*[@type="button" and contains(text(), '${buttonType}')]`
    }
}

