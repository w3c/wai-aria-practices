---
# This is a generated file
title: "Grid and Table Properties"
ref: /aria-practices/

github:
  repository: w3c/aria-practices
  path: aria-practices.html
permalink: /fundamentals/grid-and-table-properties/

lang: en
last_updated: 2022-02-15
---


<link rel="stylesheet" href="/assets/styles.css">
<!-- Code highlighting styles -->
<link rel="stylesheet" href="/index/css/github.css">

<script>
const addBodyClass = "fundamental-page";
if (addBodyClass) {
  document.body.classList.add(addBodyClass);
}
</script>
    
<div>

        <div class="sidebar-container">
          <aside class="sidebar-left">
            <h2 class="sidebar-headline">Table of Contents</h2>
            <ul class="sidebar-list">
              
                  <li>
                    <a href="#x7-1-using-aria-rowcount-and-aria-rowindex">Using <code>aria-rowcount</code> and <code>aria-rowindex</code></a>
                  </li>
                 
                  <li>
                    <a href="#x7-2-using-aria-colcount-and-aria-colindex">Using <code>aria-colcount</code> and <code>aria-colindex</code></a>
                  </li>
                 
                  <li>
                    <a href="#x7-3-defining-cell-spans-using-aria-colspan-and-aria-rowspan">Defining cell spans using <code>aria-colspan</code> and <code>aria-rowspan</code></a>
                  </li>
                 
                  <li>
                    <a href="#x7-4-indicating-sort-order-with-aria-sort">Indicating sort order with <code>aria-sort</code></a>
                  </li>
                
            </ul>
          </aside>
          <div class="sidebar-right">
            <section id="gridAndTableProperties"><div class="header-wrapper"><h2 id="x7-grid-and-table-properties">Grid and Table Properties</h2></div>
    
    <p>
      To fully present and describe a grid or table, in addition to parsing the headers, rows, and cells using the roles described in the
      <a href="/patterns/grid/">grid pattern</a> or <a href="/patterns/table/">table pattern</a>,
      assistive technologies need to be able to determine:
    </p>
    <ul>
      <li>The number of rows and columns.</li>
      <li>Whether any columns or rows are hidden, e.g., columns 1 through 3 and  5 through 8 are visible but column 4 is hidden.</li>
      <li>Whether a cell spans multiple rows or columns.</li>
      <li>Whether and how data is sorted.</li>
    </ul>
    <p>
      Browsers automatically populate their accessibility tree with the number of rows and columns in a grid or table based on the rendered DOM.
      However, there are many situations where the DOM does not contain the whole grid or table, such as when the data set is too large to fully render.
      Additionally, some of this information, like skipped columns or rows and how data is sorted, cannot be derived from the DOM structure.
    </p>
    <p>The below sections explain how to use the following properties that ARIA provides for grid and table accessibility.</p>
    <div class="table-wrap"><table class="widget-features">
      <caption>Grid and Table Property Definitions</caption>
      <thead>
        <tr>
          <th>Property</th>
          <th>Definition</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th><code>aria-colcount</code></th>
          <td>Defines the total number of columns in a <code>table</code>, <code>grid</code>, or <code>treegrid</code>.</td>
        </tr>
        <tr>
          <th><code>aria-rowcount</code></th>
          <td>Defines the total number of rows in a <code>table</code>, <code>grid</code>, or <code>treegrid</code>.</td>
        </tr>
        <tr>
          <th><code>aria-colindex</code></th>
          <td>
            <ul>
              <li>Defines a cell's position with respect to the total number of columns within a <code>table</code>, <code>grid</code>, or <code>treegrid</code>.</li>
              <li><strong>Note:</strong> Numbering starts with 1, not 0.</li>
            </ul>
          </td>
        </tr>
        <tr>
          <th><code>aria-rowindex</code></th>
          <td>
            <ul>
              <li>Defines a cell's position with respect to the total number of rows within a <code>table</code>, <code>grid</code>, or <code>treegrid</code>.</li>
              <li><strong>Note:</strong> Numbering starts with 1, not 0.</li>
            </ul>
          </td>
        </tr>
        <tr>
          <th><code>aria-colspan</code></th>
          <td>Defines the number of columns spanned by a cell or gridcell within a <code>table</code>, <code>grid</code>, or <code>treegrid</code>.</td>
        </tr>
        <tr>
          <th><code>aria-rowspan</code></th>
          <td>Defines the number of rows spanned by a cell or gridcell within a <code>table</code>, <code>grid</code>, or <code>treegrid</code>.</td>
        </tr>
        <tr>
          <th><code>aria-sort</code></th>
          <td>Indicates if items in a row or column are sorted in ascending or descending order.</td>
        </tr>
      </tbody>
    </table></div>
    <section id="gridAndTableProperties_rows"><div class="header-wrapper"><h3 id="x7-1-using-aria-rowcount-and-aria-rowindex">Using <code>aria-rowcount</code> and <code>aria-rowindex</code></h3></div>
      
      <p>
        When the number of rows represented by the DOM structure is not the total number of rows available for a table, grid, or treegrid,
        the  <code>aria-rowcount</code>  property is used to communicate the total number of rows available,
        and it is accompanied by the <code>aria-rowindex</code> property to identify the row indices of the rows that are present in the DOM.
      </p>
      <p>
        The <code>aria-rowcount</code> is specified on the element with the <code>table</code>, <code>grid</code>, or <code>treegrid</code> role.
        Its value is an integer equal to the total number of rows available, including header rows.
        If the total number of rows is unknown, a value of <code>-1</code> may be specified.
        Using a value of <code>-1</code> indicates that more rows are available to include in the DOM without specifying the size of the available supply.
      </p>
      <p>
        When <code>aria-rowcount</code> is used on a <code>table</code>, <code>grid</code>, or <code>treegrid</code>,
        a value for <code>aria-rowindex</code> property is specified on each of its descendant rows, including any header rows.
        The value of <code>aria-rowindex</code> is an integer that is:
      </p>
      <ol>
        <li>Greater than or equal to 1.</li>
        <li>Greater than the value of <code>aria-rowindex</code> on any previous rows.</li>
        <li>Set to the index of the first row in the span if cells span multiple rows.</li>
        <li>Less than or equal to the total number of rows.</li>
      </ol>
      <p>
        <strong>WARNING!</strong> Missing or inconsistent values of <code>aria-rowindex</code> could have devastating effects on assistive technology behavior.
        For example, specifying an invalid value for <code>aria-rowindex</code> or setting it on some but not all rows in a table, could cause screen reader table reading functions to skip rows or simply stop functioning.
      </p>
      <p>
        The following code demonstrates the use of <code>aria-rowcount</code> and <code>aria-rowindex</code> properties on a table containing a hypothetical class list.
      </p>
      <pre><code aria-busy="false" class="hljs xml">
  <span class="hljs-comment">&lt;!--
    aria-rowcount tells assistive technologies the actual size of the grid
    is 463 rows even though only 4 rows are present in the markup.
  --&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">table</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"grid"</span> <span class="hljs-attr">aria-rowcount</span>=<span class="hljs-string">"463"</span>&gt;</span>
    aria-label="Student roster for history 101"
    <span class="hljs-tag">&lt;<span class="hljs-name">thead</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">tr</span> <span class="hljs-attr">aria-rowindex</span>=<span class="hljs-string">"1"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>Last Name<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>First Name<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>E-mail<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>Major<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>Minor<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>Standing<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">thead</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">tbody</span>&gt;</span>
        <span class="hljs-comment">&lt;!--
          aria-rowindex tells assistive technologies that this
          row is row 51 in the grid of 463 rows.
        --&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">tr</span> <span class="hljs-attr">aria-rowindex</span>=<span class="hljs-string">"51"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>Henderson<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>Alan<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>ahederson56@myuniveristy.edu<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>Business<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>Spanish<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>Junior<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
        <span class="hljs-comment">&lt;!--
          aria-rowindex tells assistive technologies that this
          row is row 52 in the grid of 463 rows.
        --&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">tr</span> <span class="hljs-attr">aria-rowindex</span>=<span class="hljs-string">"52"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>Henderson<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>Alice<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>ahederson345@myuniveristy.edu<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>Engineering<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>none<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>Sophomore<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
        <span class="hljs-comment">&lt;!--
          aria-rowindex tells assistive technologies that this
          row is row 53 in the grid of 463 rows.
        --&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">tr</span> <span class="hljs-attr">aria-rowindex</span>=<span class="hljs-string">"53"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>Henderson<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>Andrew<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>ahederson75@myuniveristy.edu<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>General Studies<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>none<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>Freshman<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">tbody</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">table</span>&gt;</span>
</code></pre>
    </section>
    <section id="gridAndTableProperties_cols"><div class="header-wrapper"><h3 id="x7-2-using-aria-colcount-and-aria-colindex">Using <code>aria-colcount</code> and <code>aria-colindex</code></h3></div>
      
      <p>
        When the number of columns represented by the DOM structure is not the total number of columns available for a table, grid, or treegrid,
        the  <code>aria-colcount</code>  property is used to communicate the total number of columns available,
        and it is accompanied by the <code>aria-colindex</code> property to identify the column indices of the columns that are present in the DOM.
      </p>
      <p>
        The <code>aria-colcount</code> is specified on the element with the <code>table</code>, <code>grid</code>, or <code>treegrid</code> role.
        Its value is an integer equal to the total number of columns available.
        If the total number of columns is unknown, a value of <code>-1</code> may be specified.
        Using a value of <code>-1</code> indicates that more columns are available to include in the DOM without specifying the size of the available supply.
      </p>
      <p>
        When <code>aria-colcount</code> is used on a <code>table</code>, <code>grid</code>, or <code>treegrid</code>,
        a value for <code>aria-colindex</code> property is either specified on each of its descendant rows or on every cell in each descendant row, depending on whether the columns are contiguous as described below.
        The value of <code>aria-colindex</code> is an integer that is:
      </p>
      <ol>
        <li>Greater than or equal to 1.</li>
        <li>When set on a cell, greater than the value set on any previous cell within the same row.</li>
        <li>Set to the index of the first column in the span if a cell spans multiple columns.</li>
        <li>Less than or equal to the total number of columns.</li>
      </ol>
      <p>
        <strong>WARNING!</strong> Missing or inconsistent values of <code>aria-colindex</code> could have devastating effects on assistive technology behavior.
        For example, specifying an invalid value for <code>aria-colindex</code> or setting it on some but not all cells in a row, could cause screen reader table reading functions to skip cells or simply stop functioning.
      </p>
      <section id="gridAndTableProperties_cols_contiguous"><div class="header-wrapper"><h4 id="x7-2-1-using-aria-colindex-when-column-indices-are-contiguous">Using <code>aria-colindex</code> When Column Indices Are Contiguous</h4></div>
        
        <p>
          When all the cells in a row have column index numbers that are consecutive integers,
          <code>aria-colindex</code> can be set on the row element with a value equal to the index number of the first column in the set.
          Browsers will then compute a column number for each cell in the row.
        </p>
        <p>
          The following code shows a grid with 16 columns, of which columns 2 through 5 are displayed to the user.
          Because the set of columns is contiguous, <code>aria-colindex</code> can be placed on each row.
        </p>
        <pre>        <code aria-busy="false" class="hljs xml">
<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"grid"</span> <span class="hljs-attr">aria-colcount</span>=<span class="hljs-string">"16"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"rowgroup"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"row"</span> <span class="hljs-attr">aria-colindex</span>=<span class="hljs-string">"2"</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"columnheader"</span>&gt;</span>First Name<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"columnheader"</span>&gt;</span>Last Name<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"columnheader"</span>&gt;</span>Company<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"columnheader"</span>&gt;</span>Address<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"rowgroup"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"row"</span> <span class="hljs-attr">aria-colindex</span>=<span class="hljs-string">"2"</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"gridcell"</span>&gt;</span>Fred<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"gridcell"</span>&gt;</span>Jackson<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"gridcell"</span>&gt;</span>Acme, Inc.<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"gridcell"</span>&gt;</span>123 Broad St.<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"row"</span> <span class="hljs-attr">aria-colindex</span>=<span class="hljs-string">"2"</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"gridcell"</span>&gt;</span>Sara<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"gridcell"</span>&gt;</span>James<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"gridcell"</span>&gt;</span>Acme, Inc.<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"gridcell"</span>&gt;</span>123 Broad St.<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
   …
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
</code></pre>
      </section>
      <section id="gridAndTableProperties_cols_noncontiguous"><div class="header-wrapper"><h4 id="x7-2-2-using-aria-colindex-when-column-indices-are-not-contiguous">Using <code>aria-colindex</code> When Column Indices Are Not Contiguous</h4></div>
        
        <p>
          When the cells in a row have column index numbers that are not consecutive integers, <code>aria-colindex</code> needs to be set on each cell in the row.
          The following example shows a grid for an online grade book where the first two columns contain a student name and subsequent columns contain scores.
          In this example, the first two columns with the student name are shown, but the score columns have been scrolled to show columns 10 through 13.
          Columns 3 through 9 are not visible so are not in the DOM.
        </p>
        <pre><code aria-busy="false" class="hljs xml">
  <span class="hljs-tag">&lt;<span class="hljs-name">table</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"grid"</span> <span class="hljs-attr">aria-rowcount</span>=<span class="hljs-string">"463"</span> <span class="hljs-attr">aria-colcount</span>=<span class="hljs-string">"13"</span>&gt;</span>
    aria-label="Student grades for history 101"
    <span class="hljs-comment">&lt;!--
      aria-rowcount and aria-colcount tell assistive technologies
      the actual size of the grid is 463 rows by 13 columns,
      which is not the number rows and columns found in the markup.
    --&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">thead</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">tr</span> <span class="hljs-attr">aria-rowindex</span>=<span class="hljs-string">"1"</span>&gt;</span>
        <span class="hljs-comment">&lt;!--
          aria-colindex tells assistive technologies that the
          following columns represent columns 1 and 2 of the total data set.
        --&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">th</span> <span class="hljs-attr">aria-colindex</span>=<span class="hljs-string">"1"</span>&gt;</span>Last Name<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">th</span> <span class="hljs-attr">aria-colindex</span>=<span class="hljs-string">"2"</span>&gt;</span>First Name<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
        <span class="hljs-comment">&lt;!--
          aria-colindex tells users of assistive technologies that the
          following columns represent columns 10, 11, 12, and 13 of
          the overall data set of grades.
        --&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">th</span> <span class="hljs-attr">aria-colindex</span>=<span class="hljs-string">"10"</span>&gt;</span>Homework 4<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">th</span> <span class="hljs-attr">aria-colindex</span>=<span class="hljs-string">"11"</span>&gt;</span>Quiz 2<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">th</span> <span class="hljs-attr">aria-colindex</span>=<span class="hljs-string">"12"</span>&gt;</span>Homework 5<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">th</span> <span class="hljs-attr">aria-colindex</span>=<span class="hljs-string">"13"</span>&gt;</span>Homework 6<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">thead</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">tbody</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">tr</span> <span class="hljs-attr">aria-rowindex</span>=<span class="hljs-string">"50"</span>&gt;</span>
        <span class="hljs-comment">&lt;!--
          every cell needs to define the aria-colindex attribute
        --&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">td</span> <span class="hljs-attr">aria-colindex</span>=<span class="hljs-string">"1"</span>&gt;</span>Henderson<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">td</span> <span class="hljs-attr">aria-colindex</span>=<span class="hljs-string">"2"</span>&gt;</span>Alan<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">td</span> <span class="hljs-attr">aria-colindex</span>=<span class="hljs-string">"10"</span>&gt;</span>8<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">td</span> <span class="hljs-attr">aria-colindex</span>=<span class="hljs-string">"11"</span>&gt;</span>25<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">td</span> <span class="hljs-attr">aria-colindex</span>=<span class="hljs-string">"12"</span>&gt;</span>9<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">td</span> <span class="hljs-attr">aria-colindex</span>=<span class="hljs-string">"13"</span>&gt;</span>9<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">tr</span> <span class="hljs-attr">aria-rowindex</span>=<span class="hljs-string">"51"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">td</span> <span class="hljs-attr">aria-colindex</span>=<span class="hljs-string">"1"</span>&gt;</span>Henderson<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">td</span> <span class="hljs-attr">aria-colindex</span>=<span class="hljs-string">"2"</span>&gt;</span>Alice<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">td</span> <span class="hljs-attr">aria-colindex</span>=<span class="hljs-string">"10"</span>&gt;</span>10<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">td</span> <span class="hljs-attr">aria-colindex</span>=<span class="hljs-string">"11"</span>&gt;</span>27<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">td</span> <span class="hljs-attr">aria-colindex</span>=<span class="hljs-string">"12"</span>&gt;</span>10<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">td</span> <span class="hljs-attr">aria-colindex</span>=<span class="hljs-string">"13"</span>&gt;</span>8<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">tr</span> <span class="hljs-attr">aria-rowindex</span>=<span class="hljs-string">"52"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">td</span> <span class="hljs-attr">aria-colindex</span>=<span class="hljs-string">"1"</span>&gt;</span>Henderson<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">td</span> <span class="hljs-attr">aria-colindex</span>=<span class="hljs-string">"2"</span>&gt;</span>Andrew<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">td</span> <span class="hljs-attr">aria-colindex</span>=<span class="hljs-string">"10"</span>&gt;</span>9<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">td</span> <span class="hljs-attr">aria-colindex</span>=<span class="hljs-string">"11"</span>&gt;</span>0<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">td</span> <span class="hljs-attr">aria-colindex</span>=<span class="hljs-string">"12"</span>&gt;</span>29<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">td</span> <span class="hljs-attr">aria-colindex</span>=<span class="hljs-string">"13"</span>&gt;</span>8<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">tbody</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">table</span>&gt;</span>
</code></pre>
      </section>
    </section>
    <section id="gridAndTableProperties_spans"><div class="header-wrapper"><h3 id="x7-3-defining-cell-spans-using-aria-colspan-and-aria-rowspan">Defining cell spans using <code>aria-colspan</code> and <code>aria-rowspan</code></h3></div>
      
      <p>
        For tables, grids, and treegrids  created using elements other than HTML <code>table</code> elements,
        row and column spans are defined with the <code>aria-rowspan</code> and <code>aria-colspan</code> properties.
      </p>
      <p>The value of <code>aria-colspan</code> is an integer that is:</p>
      <ol>
        <li>Greater than or equal to 1.</li>
        <li>less than the value that would cause the cell to overlap the next cell in the same row.</li>
      </ol>
      <p>The value of <code>aria-rowspan</code> is an integer that is:</p>
      <ol>
        <li>Greater than or equal to 0.</li>
        <li>0 means the cell spans all the remaining rows in its row group.</li>
        <li>less than the value that would cause the cell to overlap the next cell in the same column.</li>
      </ol>
      <p>
        The following example grid has a two row header.
        The first two columns have headers that span both rows of the header.
        The subsequent 6 columns are grouped into 3 pairs with headers in the first row that each span two columns.
      </p>
      <pre><code aria-busy="false" class="hljs xml">
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"grid"</span> <span class="hljs-attr">aria-rowcount</span>=<span class="hljs-string">"463"</span>&gt;</span>
    aria-label="Student grades for history 101"
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"rowgroup"</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"row"</span> <span class="hljs-attr">aria-rowindex</span>=<span class="hljs-string">"1"</span>&gt;</span>
          <span class="hljs-comment">&lt;!--
            aria-rowspan and aria-colspan provide
            assistive technologies with the correct data cell header information
            when header cells span more than one row or column.
          --&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"columnheader"</span> <span class="hljs-attr">aria-rowspan</span>=<span class="hljs-string">"2"</span>&gt;</span>Last Name<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"columnheader"</span> <span class="hljs-attr">aria-rowspan</span>=<span class="hljs-string">"2"</span>&gt;</span>First Name<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"columnheader"</span> <span class="hljs-attr">aria-colspan</span>=<span class="hljs-string">"2"</span>&gt;</span>Test 1<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"columnheader"</span> <span class="hljs-attr">aria-colspan</span>=<span class="hljs-string">"2"</span>&gt;</span>Test 2<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"columnheader"</span> <span class="hljs-attr">aria-colspan</span>=<span class="hljs-string">"2"</span>&gt;</span>Final<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"row"</span> <span class="hljs-attr">aria-rowindex</span>=<span class="hljs-string">"2"</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"columnheader"</span>&gt;</span>Score<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"columnheader"</span>&gt;</span>Grade<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"columnheader"</span>&gt;</span>Score<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"columnheader"</span>&gt;</span>Grade<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"columnheader"</span>&gt;</span>Total<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"columnheader"</span>&gt;</span>Grade<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"rowgroup"</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"row"</span> <span class="hljs-attr">aria-rowindex</span>=<span class="hljs-string">"50"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"cell"</span>&gt;</span>Henderson<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"cell"</span>&gt;</span>Alan<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"cell"</span>&gt;</span>89<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"cell"</span>&gt;</span>B+<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"cell"</span>&gt;</span>72<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"cell"</span>&gt;</span>C<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"cell"</span>&gt;</span>161<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"cell"</span>&gt;</span>B-<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"row"</span> <span class="hljs-attr">aria-rowindex</span>=<span class="hljs-string">"51"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"cell"</span>&gt;</span>Henderson<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"cell"</span>&gt;</span>Alice<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"cell"</span>&gt;</span>94<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"cell"</span>&gt;</span>A<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"cell"</span>&gt;</span>86<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"cell"</span>&gt;</span>B<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"cell"</span>&gt;</span>180<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"cell"</span>&gt;</span>A-<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"row"</span> <span class="hljs-attr">aria-rowindex</span>=<span class="hljs-string">"52"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"cell"</span>&gt;</span>Henderson<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"cell"</span>&gt;</span>Andrew<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"cell"</span>&gt;</span>82<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"cell"</span>&gt;</span>B-<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"cell"</span>&gt;</span>95<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"cell"</span>&gt;</span>A<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"cell"</span>&gt;</span>177<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"cell"</span>&gt;</span>B+<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
</code></pre>
      <p>
        <strong>Note:</strong> When using HTML <code>table</code> elements,
        use the native semantics of the <code>th</code> and <code>td</code> elements to define row and column spans
        by using the <code>rowspan</code> and <code>colspan</code> attributes.
      </p>
    </section>
    <section id="gridAndTableProperties_sort"><div class="header-wrapper"><h3 id="x7-4-indicating-sort-order-with-aria-sort">Indicating sort order with <code>aria-sort</code></h3></div>
      
      <p>
        When rows or columns are sorted, the <code>aria-sort</code> property can be applied to a column or row header to indicate the sorting method.
        The following table describes allowed values for <code>aria-sort</code>.
      </p>
      <div class="table-wrap"><table class="widget-features">
        <caption>
          Description of values for <code>aria-sort</code>
        </caption>
        <thead>
          <tr>
            <th>Value</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th><code>ascending</code></th>
            <td>Data are sorted in ascending order.</td>
          </tr>
          <tr>
            <th><code>descending</code></th>
            <td>Data are sorted in descending order.</td>
          </tr>
          <tr>
            <th><code>other</code></th>
            <td>Data are sorted by an algorithm other than ascending or descending.</td>
          </tr>
          <tr>
            <th><code>none</code></th>
            <td>Default (no sort applied).</td>
          </tr>
        </tbody>
      </table></div>
      <p>
        It is important to note that ARIA does not provide a way to indicate levels of sort for data sets that have multiple sort keys.
        Thus, there is limited value to applying <code>aria-sort</code> with a value other than <code>none</code> to more than one column or row.
      </p>
      <p>The following example grid uses <code>aria-sort</code> to indicate the rows are sorted from the highest "Quiz 2" score to the lowest "Quiz 2" score.</p>
      <pre><code aria-busy="false" class="hljs xml">
  <span class="hljs-tag">&lt;<span class="hljs-name">table</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"grid"</span> <span class="hljs-attr">aria-rowcount</span>=<span class="hljs-string">"463"</span> <span class="hljs-attr">aria-colcount</span>=<span class="hljs-string">"13"</span>
    <span class="hljs-attr">aria-label</span>=<span class="hljs-string">"Student grades for history 101"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">thead</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">tr</span> <span class="hljs-attr">aria-colindex</span>=<span class="hljs-string">"10"</span> <span class="hljs-attr">aria-rowindex</span>=<span class="hljs-string">"1"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>Homework 4<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
        <span class="hljs-comment">&lt;!--
          aria-sort indicates the column with the heading
          "Quiz 2" has been used to sort the rows of the grid.
        --&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">th</span> <span class="hljs-attr">aria-sort</span>=<span class="hljs-string">"descending"</span>&gt;</span>Quiz 2<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>Homework 5<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>Homework 6<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">thead</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">tbody</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">tr</span> <span class="hljs-attr">aria-colindex</span>=<span class="hljs-string">"10"</span> <span class="hljs-attr">aria-rowindex</span>=<span class="hljs-string">"50"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>8<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>30<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>9<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>9<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">tr</span> <span class="hljs-attr">aria-colindex</span>=<span class="hljs-string">"10"</span>  <span class="hljs-attr">aria-rowindex</span>=<span class="hljs-string">"51"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>10<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>29<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>10<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>8<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">tr</span> <span class="hljs-attr">aria-colindex</span>=<span class="hljs-string">"10"</span>  <span class="hljs-attr">aria-rowindex</span>=<span class="hljs-string">"52"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>9<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>9<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>27<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>6<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">tr</span> <span class="hljs-attr">aria-colindex</span>=<span class="hljs-string">"10"</span>  <span class="hljs-attr">aria-rowindex</span>=<span class="hljs-string">"53"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>9<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>10<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>26<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>8<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">tr</span> <span class="hljs-attr">aria-colindex</span>=<span class="hljs-string">"10"</span>  <span class="hljs-attr">aria-rowindex</span>=<span class="hljs-string">"54"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>9<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>7<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>24<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>6<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">tbody</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">table</span>&gt;</span>
</code></pre>


    </section>

  </section>
          </div>
        </div>
      
</div>
<script>
  var SkipToConfig = {
    settings: {
      skipTo: {
        displayOption: 'popup',
        attachElement: '#site-header',
        colorTheme: 'aria'
      }
    }
  };
</script>
<script src="/assets/skipto.min.js"></script>
