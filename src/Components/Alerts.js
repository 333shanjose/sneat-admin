import React from 'react'

function Alerts() {
  return (
    <>
    <div class="content-wrapper">

            <div class="container-xxl flex-grow-1 container-p-y">
              <h4 class="py-3 mb-4"><span class="text-muted fw-light">UI elements /</span> Alerts</h4>
              <div class="row mb-4">
                <div class="col-md mb-4 mb-md-0">
                  <div class="card">
                    <h5 class="card-header">Basic Alerts</h5>
                    <div class="card-body">
                      <div class="alert alert-primary" role="alert">This is a primary alert — check it out!</div>

                      <div class="alert alert-secondary" role="alert">This is a secondary alert — check it out!</div>

                      <div class="alert alert-success" role="alert">This is a success alert — check it out!</div>

                      <div class="alert alert-danger" role="alert">This is a danger alert — check it out!</div>

                      <div class="alert alert-warning" role="alert">This is a warning alert — check it out!</div>

                      <div class="alert alert-info" role="alert">This is an info alert — check it out!</div>

                      <div class="alert alert-dark mb-0" role="alert">This is a dark alert — check it out!</div>
                    </div>
                  </div>
                </div>
                <div class="col-md">
                  <div class="card">
                    <h5 class="card-header">Dismissible Alerts</h5>
                    <div class="card-body">
                      <div class="alert alert-primary alert-dismissible" role="alert">
                        This is a primary dismissible alert — check it out!
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                      </div>

                      <div class="alert alert-secondary alert-dismissible" role="alert">
                        This is a secondary dismissible alert — check it out!
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                      </div>

                      <div class="alert alert-success alert-dismissible" role="alert">
                        This is a success dismissible alert — check it out!
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                      </div>

                      <div class="alert alert-danger alert-dismissible" role="alert">
                        This is a danger dismissible alert — check it out!
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                      </div>

                      <div class="alert alert-warning alert-dismissible" role="alert">
                        This is a warning dismissible alert — check it out!
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                      </div>

                      <div class="alert alert-info alert-dismissible" role="alert">
                        This is an info dismissible alert — check it out!
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                      </div>

                      <div class="alert alert-dark alert-dismissible mb-0" role="alert">
                        This is a dark dismissible alert — check it out!
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                      </div>
                    </div>
                  </div>
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

export default Alerts