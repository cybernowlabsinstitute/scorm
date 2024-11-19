# scorm

1. Unzip SCORM zip file
1. Rename the folder by giving it a lowercase package name with no spaces (eg. `kareo-schedule-appointment`)
1. Add this to top of the `index_scorm.html` file (without the `+`)
    ```diff
    <!DOCTYPE html>
    <html lang="en">
    <head>
    +<script data-cfasync="false" type="text/javascript" src="/js/index.js"></script>
    ```
1. Rezip the directory (it should be the name of the directory, eg. `kareo-schedule-appointment.zip`)
1. Upload zip to the `main` branch of https://github.com/cybernowlabsinstitute/scorm
1. After a short time, the SCORM should be viewable at `https://cybernowlabsinstitute.github.io/scorm/<directory_name>/index_scorm.html`
1. You can use this plugin code
   ```html
    <iframe
        title="<Title of Module>"
        src="https://cybernowlabsinstitute.github.io/scorm/<directory_name>/index_scorm.html"
        style="width: 100%; border: 0; min-height: 745px"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
    >Browser not compatible.</iframe>
   ```
