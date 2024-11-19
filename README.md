# scorm

1. Unzip SCORM zip file
1. Rename the folder by giving it a lowercase directory name with no spaces (eg. `c01_s02_installing_a_hypervisor_click`)
1. Add this to top of the `index_scorm.html` file (without the `+`)
    ```diff
    <!DOCTYPE html>
    <html lang="en">
    <head>
    +<script data-cfasync="false" type="text/javascript" src="/js/index.js"></script>
    ```
1. Rezip the directory (it should be the name of the directory, eg. `c01_s02_installing_a_hypervisor_click.zip`)
1. Upload zip to the `main` branch of https://github.com/cybernowlabsinstitute/scorm
1. After a short time, the SCORM should be viewable at `https://scorm.cybernowlabsinstitute.com/scorm/<directory_name>/index_scorm.html`
1. You can use this plugin code
   ```html
    <iframe
        title="<Title of Module>"
        src="https://scorm.cybernowlabsinstitute.com/<directory_name>/index_scorm.html"
        style="width: 100%; border: 0; min-height: 745px"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
    >Browser not compatible.</iframe>
   ```
