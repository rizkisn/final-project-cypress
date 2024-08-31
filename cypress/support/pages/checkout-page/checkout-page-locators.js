module.exports = {
    checkouttest: {
        imageCompanyLogo: '//*[@id="nava"]',
        nameofUser: '//*[@id="nameofuser"]',
        logout: '//*[@id="logout2"]',
        name: '//*[@id="name"]',
        country: '//*[@id="country"]',
        city: '//*[@id="city"]',
        card: '//*[@id="card"]',
        month: '//*[@id="month"]',
        year: '//*[@id="year"]',
        total: '//*[@id="totalm"]',
        placeform: '//*[@id="orderModalLabel"]',
        button: (buttonType) => `//*[@type="button" and contains(text(), '${buttonType}')]`
    }
}