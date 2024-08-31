module.exports = {
    datatestid: {
        imageCompanyLogo: '//*[@id="nava"]',
        menusignup: '//*[@id="signin2"]',
        nameofUser: '//*[@id="nameofuser"]',
        username: '//*[@id="sign-username"]',
        password: '//*[@id="sign-password"]',
        formsignup: '//*[@id="signInModalLabel"]',
        button: (buttonType) => `//*[@type="button" and contains(text(), '${buttonType}')]`
    }
}
