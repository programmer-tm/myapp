import {plus, minus, send, del, sendChat, getNews, load_News, errorNews, registerStart, registerSuccess, registerErrors, loginStart, loginSuccess, loginErrors, logoutStart, logoutSuccess, logoutErrors} from './actionTypes';


test('Изначальные значения! (plus), Текущее значение: ' +plus, () => {
    expect(plus).toBe('plus');
})
test('Изначальные значения! (minus), Текущее значение: ' +minus, () => {
    expect(minus).toBe('minus');
})
test('Изначальные значения! (send), Текущее значение: ' +send, () => {
    expect(send).toBe('send');
})
test('Изначальные значения! (del), Текущее значение: ' +del, () => {
    expect(del).toBe('del');
})
test('Изначальные значения! (sendChat), Текущее значение: ' +sendChat, () => {
    expect(sendChat).toBe('sendChat');
})
test('Изначальные значения! (getNews), Текущее значение: ' +getNews, () => {
    expect(getNews).toBe('getNews');
})
test('Изначальные значения! (errorNews), Текущее значение: ' +errorNews, () => {
    expect(errorNews).toBe('errorNews');
})
test('Изначальные значения! (load_News), Текущее значение: ' +load_News, () => {
    expect(load_News).toBe('load_News');
})
test('Изначальные значения! (registerStart), Текущее значение: ' +registerStart, () => {
    expect(registerStart).toBe('registerStart');
})
test('Изначальные значения! (registerSuccess), Текущее значение: ' +registerSuccess, () => {
    expect(registerSuccess).toBe('registerSuccess');
})
test('Изначальные значения! (registerError), Текущее значение: ' +registerErrors, () => {
    expect(registerErrors).toBe('registerErrors');
})
test('Изначальные значения! (loginStart), Текущее значение: ' +loginStart, () => {
    expect(loginStart).toBe('loginStart');
})
test('Изначальные значения! (loginSuccess), Текущее значение: ' +loginSuccess, () => {
    expect(loginSuccess).toBe('loginSuccess');
})
test('Изначальные значения! (loginErrors), Текущее значение: ' +loginErrors, () => {
    expect(loginErrors).toBe('loginErrors');
})
test('Изначальные значения! (logoutStart), Текущее значение: ' +logoutStart, () => {
    expect(logoutStart).toBe('logoutStart');
})
test('Изначальные значения! (logoutSuccess), Текущее значение: ' +logoutSuccess, () => {
    expect(logoutSuccess).toBe('logoutSuccess');
})
test('Изначальные значения! (logoutErrors), Текущее значение: ' +logoutErrors, () => {
    expect(logoutErrors).toBe('logoutErrors');
})