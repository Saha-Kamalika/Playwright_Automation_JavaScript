# Playwright Assertions Reference Guide

This guide covers common Playwright test assertions and their usage.

## Page Assertions

### 1) `expect(page).toHaveURL()`
**Purpose:** Page has URL  
**Example:**
```javascript
await expect(page).toHaveURL('https://example.com/dashboard');
```

### 2) `expect(page).toHaveTitle()`
**Purpose:** Page has title  
**Example:**
```javascript
await expect(page).toHaveTitle('OrangeHRM');
```

## Locator Visibility & State Assertions

### 3) `expect(locator).toBeVisible()`
**Purpose:** Element is visible  
**Example:**
```javascript
await expect(page.locator('.dashboard')).toBeVisible();
```

### 4) `expect(locator).toBeEnabled()`
**Purpose:** Control is enabled  
**Example:**
```javascript
await expect(page.locator('button')).toBeEnabled();
```

### 5) `expect(locator).toBeDisabled()`
**Purpose:** Element is disabled  
**Example:**
```javascript
await expect(page.locator('input[disabled]')).toBeDisabled();
```

### 6) `expect(locator).toBeChecked()`
**Purpose:** Radio/Checkbox is checked  
**Example:**
```javascript
await expect(page.locator('input[type="checkbox"]')).toBeChecked();
```

## Text & Content Assertions

### 7) `expect(locator).toHaveText()`
**Purpose:** Element matches text  
**Example:**
```javascript
await expect(page.locator('h1')).toHaveText('Welcome');
```

### 8) `expect(locator).toContainText()`
**Purpose:** Element contains text  
**Example:**
```javascript
await expect(page.locator('.message')).toContainText('Success');
```

### 9) `expect(locator).toHaveValue(value)`
**Purpose:** Input has a value  
**Example:**
```javascript
await expect(page.locator('input[name="username"]')).toHaveValue('Admin');
```

## Collection Assertions

### 10) `expect(locator).toHaveCount()`
**Purpose:** List of elements has given length  
**Example:**
```javascript
const options = page.locator('.oxd-select-dropdown .oxd-select-option');
await expect(options).toHaveCount(6);
```

## Attribute Assertions

### 11) `expect(locator).toHaveAttribute()`
**Purpose:** Element has attribute  
**Example:**
```javascript
await expect(page.locator('button')).toHaveAttribute('type', 'submit');
```

### 12) `expect(locator).toHaveClass()`
**Purpose:** Element has class  
**Example:**
```javascript
await expect(page.locator('div')).toHaveClass('active');
```

### 13) `expect(locator).toHaveCSS()`
**Purpose:** Element has CSS property  
**Example:**
```javascript
await expect(page.locator('button')).toHaveCSS('color', 'rgb(255, 0, 0)');
```

## Negative Assertions

All assertions can be negated using `.not`:
```javascript
await expect(locator).not.toBeVisible();
await expect(locator).not.toHaveText('Error');
```

## Soft Assertions

Use soft assertions to continue test execution even if one fails:
```javascript
await expect.soft(page.locator('h1')).toHaveText('Welcome');
await expect.soft(page.locator('button')).toBeEnabled();
// Test continues even if assertions fail
```

## Common Patterns

### Dropdown Option Count
```javascript
const dropdown = page.locator('.oxd-select-text-input');
await dropdown.click();
const options = page.locator('.oxd-select-dropdown .oxd-select-option');
await expect(options).toHaveCount(6);
```

### Form Validation
```javascript
const username = page.locator('input[name="username"]');
await username.fill('Admin');
await expect(username).toHaveValue('Admin');
```

### Navigation Check
```javascript
await page.click('button');
await expect(page).toHaveURL('https://example.com/new-page');
```

### Element State Verification
```javascript
await expect(page.locator('button')).toBeDisabled();
// After some action
await expect(page.locator('button')).toBeEnabled();
```
