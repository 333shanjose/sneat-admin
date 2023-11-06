import React from 'react'

function Layoutsnavbar() {
  return (
    <>
      <div class="content-wrapper">

            <div class="container-xxl flex-grow-1 container-p-y">
              <div class="layout-demo-wrapper">
                <div class="layout-demo-placeholder">
                  <img src="./assets/img/layouts/layout-without-navbar-light.png" class="img-fluid" alt="Layout without navbar" data-app-light-img="layouts/layout-without-navbar-light.png" data-app-dark-img="layouts/layout-without-navbar-dark.png"/>
                </div>
                <div class="layout-demo-info">
                  <h4>Layout without Navbar</h4>
                  <p>Layout does not contain Navbar component.</p>
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

export default  Layoutsnavbar