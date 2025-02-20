/**
 * @fileoverview This file is used to test the fixture generation.
 */

export const divFixture: string = `
<div id="example" class="example" data-example="">
    <div id="example-target-by-id">Target By ID</div>
    <div class="example-target-by-class">Target By Class</div>
    <div data-example-target-by-data-attr="">Target By Data Attribute</div>
    <p id="example-paragraph" data-example-paragraph="">Lorem ipsum</p>
    <ul id="example-unordered-list" class="example-unordered-list">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    </ul>
</div>`;

export const formFixture: string = `
<form id="example-form" class="example-form" data-example-form="">
    <input type="text" id="example-input" class="example-input" data-example-input="" />
    <input type="checkbox" id="example-checkbox" class="example-checkbox" data-example-checkbox="" />
    <input type="radio" id="example-radio" class="example-radio" data-example-radio="" />
    <input type="submit" id="example-submit" class="example-submit" data-example-submit="" />
    <button id="example-button" class="example-button" data-example-button="">Submit</button>
    <select id="example-select" class="example-select" data-example-select="">
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
    </select>
    <textarea id="example-textarea" class="example-textarea" data-example-textarea=""></textarea>
</form>`;
