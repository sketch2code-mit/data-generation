# Data Generation



### Phase 1. DSL generation

**Objective.** The pix2code project uses domain specific language (DSL) as a medium between screenshot and code in order to effectively train the model. To improve the sketch-to-code converters based on pix2code, we need to diversify and enlarge the dataset. As such, we wrote a code that auto-generate a variety of DSL files and compiled the corresponding HTML files. Then, we shot a screenshot of each HTML page, which was converted to a synthetic sketch later.

**File structure.** 

- `web-dsl-mapping.json` 
  - This json file defines the syntax of DSL. It maps a DSL token (e.g., `btn`) to the actual HTML code (e.g., `<button></button>`)
- `data_without_css_generation.ipynb`
  - This IPython Notebook file contains the code we used for automatically generating DSL files  and compiling the corresponding HTML files. You can refer to the comments in this file for more specific information.
- `data_without_css`
  - As a result, the auto-generated DSL files and the corresponding HTML files are located in this directory. 
  - There are 2160 DSL files (`.gui`) and 2160 HTML files (`.html`). The directories `js`, `styles`, `images` contain common scripts, stylesheets, images that are shared by all HTML files.


**Recompiled Pix2code data**

- `pix2code`
  - We recompiled DSL files in the pix2code dataset using our own syntax in the `web-dsl-mapping.json` file. The generated HTML files are in this directory.

---

### Phase 2. Stylesheet generation

**Objective.** TBD.

**File structure.** TBD.

- `templates`
- `landing.json`
- `data_generation.ipynb`
- `data`
  - The resulting pairs of HTML and CSS files are located in the this directory.

---

### References

- Pix2code: https://github.com/tonybeltramelli/pix2code
- Sketch2code: https://github.com/mzbac/sketch2code
- Sketch-code: https://github.com/ashnkumar/sketch-code
