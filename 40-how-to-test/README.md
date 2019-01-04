# How to Write a Test
Today we'll talk about how to think about writing automated tests.

## Agenda
1. What is automated testing
2. Reasons for testing
3. Well written tests
4. Mentality of writing a test and mistakes to look out for
5. Tests in JS
6. Tests in Ruby and Rails (time permitting)


## Defining Tests in Jest
```js
// don't forget to require the code you're testing
// var module = require('./code_to_test.js');

test("does this feature work", () => {
  ...
});

test("does this other feature work", () => {
  ...
});
```

## Running Jest Tests

If the code you're testing is in `beep_boop.js`, your tests should be in a file called `beep_boop.test.js`.

in `package.json`
```js
...
  "scripts": {
    "test": "jest"
  },
...
```

Then you can run this command from the terminal:

```bash
npm test
```

and it will find and run all `.test.js` files.

## Defining Tests in MiniTest
```
require 'minitest/autorun'
require 'minitest/pride'
# don't forget to require the ruby file containing the code you're testing

class TestSomething < MiniTest::Test

  def setup
    # optional method to DRY up your code
  end

  def teardown
    # another optional method to DRY up your code
  end

  # these methods must start with test_
  def test_does_this_thing_work
    ...
  end

  def test_does_this_thing_fail_gracefully
    ...
  end
end
```

## Running Tests

```
ruby path_to_test_file.rb
```

Or from anywhere within a Rails project:
```
rails test
```

## Writing a Test

1. Arrange
  * set up the conditions for your test
  * create whatever data you need for the next step
2. Act
  * call the method you're testing
3. Assert
  * make a claim about the results of running that code
  * use `expect(result).toBe(expectation)`, `expect(result).not.toBe(expectation)`, or [some other method from Jest](https://jestjs.io/docs/en/expect#methods) or [MiniTest](http://ruby-doc.org/stdlib-2.0.0/libdoc/minitest/rdoc/MiniTest/Assertions.html)

