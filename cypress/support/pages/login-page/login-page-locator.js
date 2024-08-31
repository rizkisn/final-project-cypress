module.exports = {
    logintest: {
        imageCompanyLogo: '//*[@id="nava"]',
        nameofUser: '//*[@id="nameofuser"]',
        login: '//*[@id="login2"]',
        logout: '//*[@id="logout2"]',
        username: '//*[@id="loginusername"]',
        password: '//*[@id="loginpassword"]',
        button: (buttonType) => `//*[@type="button" and contains(text(), '${buttonType}')]`
    }
}