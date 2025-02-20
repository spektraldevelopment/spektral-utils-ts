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
