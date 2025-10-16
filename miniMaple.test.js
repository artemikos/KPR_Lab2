import { miniMaple } from "./miniMaple.js";

// Базовые тесты
test('4*x^3, x => 12*x^2', () => {
    const maple = new miniMaple();
    expect(maple.diff('4*x^3', 'x')).toBe('12*x^2');
});

test('4*x^3, y => 0', () => {
    const maple = new miniMaple();
    expect(maple.diff('4*x^3', 'y')).toBe('0');
});

test('4*x^3-x^2, x => 12*x^2-2*x', () => {
    const maple = new miniMaple();
    expect(maple.diff('4*x^3-x^2', 'x')).toBe('12*x^2-2*x');
});

test('x^2, x => 2*x', () => {
    const maple = new miniMaple();
    expect(maple.diff('x^2', 'x')).toBe('2*x');
});

test('5, x => 0', () => {
    const maple = new miniMaple();
    expect(maple.diff('5', 'x')).toBe('0');
});

test('x, x => 1', () => {
    const maple = new miniMaple();
    expect(maple.diff('x', 'x')).toBe('1');
});

// Тесты с пробелами
test('4 * x^3 - x^2, x => 12*x^2-2*x', () => {
    const maple = new miniMaple();
    expect(maple.diff('4 * x^3 - x^2', 'x')).toBe('12*x^2-2*x');
});

// Тесты с отрицательными коэффициентами
test('-x^2, x => -2*x', () => {
    const maple = new miniMaple();
    expect(maple.diff('-x^2', 'x')).toBe('-2*x');
});

test('-4*x^3, x => -12*x^2', () => {
    const maple = new miniMaple();
    expect(maple.diff('-4*x^3', 'x')).toBe('-12*x^2');
});

// Тесты с разными переменными
test('3*y^2, y => 6*y', () => {
    const maple = new miniMaple();
    expect(maple.diff('3*y^2', 'y')).toBe('6*y');
});

test('a^2 + b^2, a => 2*a', () => {
    const maple = new miniMaple();
    expect(maple.diff('a^2 + b^2', 'a')).toBe('2*a');
});

// Тесты со сложными выражениями
test('2*x + 3*x^2 - x^3, x => 2+6*x-3*x^2', () => {
    const maple = new miniMaple();
    expect(maple.diff('2*x + 3*x^2 - x^3', 'x')).toBe('2+6*x-3*x^2');
});

// Тесты с единичными коэффициентами
test('x^3, x => 3*x^2', () => {
    const maple = new miniMaple();
    expect(maple.diff('x^3', 'x')).toBe('3*x^2');
});

// Тесты с большими степенями
test('x^5, x => 5*x^4', () => {
    const maple = new miniMaple();
    expect(maple.diff('x^5', 'x')).toBe('5*x^4');
});

// Тесты когда переменная есть только в одном мономе
test('x^2 + 5, x => 2*x', () => {
    const maple = new miniMaple();
    expect(maple.diff('x^2 + 5', 'x')).toBe('2*x');
});

// Тесты с начальным минусом
test('-3*x^2 + 2*x, x => -6*x+2', () => {
    const maple = new miniMaple();
    expect(maple.diff('-3*x^2 + 2*x', 'x')).toBe('-6*x+2');
});

// Тесты на пустые входы
test('пустая строка, x => 0', () => {
    const maple = new miniMaple();
    expect(maple.diff('', 'x')).toBe('0');
});

// Тесты с одним мономом
test('7*x^4, x => 28*x^3', () => {
    const maple = new miniMaple();
    expect(maple.diff('7*x^4', 'x')).toBe('28*x^3');
});