import React from 'react'

function Layoutscontainer() {
  return (
    <>
     <div class="content-wrapper">

            <div class="container-xxl flex-grow-1 container-p-y">
              <div class="layout-demo-wrapper">
                <div class="layout-demo-placeholder">
                  <img src="./assets/img/layouts/layout-container-light.png" class="img-fluid" alt="Layout container" data-app-light-img="layouts/layout-container-light.png" data-app-dark-img="layouts/layout-container-dark.png"/>
                </div>
                <div class="layout-demo-info">
                  <h4>Layout container</h4>
                  <p>Container layout sets a <code>max-width</code> at each responsive breakpoint.</p>
                </div>
              </div>
            </div>

            <footer class="content-footer footer bg-footer-theme">
              <div class="container-xxl d-flex flex-wrap justify-content-between py-2 flex-md-row flex-column">
                <div class="mb-2 mb-md-0">
                  ©
                  <script>
                    document.write(new Date().getFullYear());
                  </script>2023
                  , made with ❤️ by
                  <a href="https://themeselection.com" target="_blank" class="footer-link fw-medium">ThemeSelection</a>
                </div>
                <div class="d-none d-lg-inline-block">
                  <a href="https://themeselection.com/license/" class="footer-link me-4" target="_blank">License</a>
                  <a href="https://themeselection.com/" target="_blank" class="footer-link me-4">More Themes</a>

                  <a href="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/documentation/" target="_blank" class="footer-link me-4">Documentation</a>

                  <a href="https://github.com/themeselection/sneat-html-admin-template-free/issues" target="_blank" class="footer-link me-4">Support</a>
                </div>
              </div>
            </footer>

            <div class="content-backdrop fade"></div>
          </div>
    
    
    </>
  )
}

export default Layoutscontainer