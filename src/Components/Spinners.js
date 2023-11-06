import React from 'react'

function Spinners() {
  return (
    <>
      <div class="content-wrapper">

            <div class="container-xxl flex-grow-1 container-p-y">
              <h4 class="py-3 mb-4"><span class="text-muted fw-light">UI elements /</span> Spinners</h4>

              <div class="card mb-4">
                <h5 class="card-header">Style</h5>
                <div class="card-body">
                  <div class="row gy-3">
                    <div class="col-md">
                      <div class="text-light small fw-medium">Border</div>

                      <div class="demo-inline-spacing">
                        <div class="spinner-border" role="status">
                          <span class="visually-hidden">Loading...</span>
                        </div>
                        <div class="spinner-border text-primary" role="status">
                          <span class="visually-hidden">Loading...</span>
                        </div>
                        <div class="spinner-border text-secondary" role="status">
                          <span class="visually-hidden">Loading...</span>
                        </div>
                        <div class="spinner-border text-success" role="status">
                          <span class="visually-hidden">Loading...</span>
                        </div>
                        <div class="spinner-border text-danger" role="status">
                          <span class="visually-hidden">Loading...</span>
                        </div>
                        <div class="spinner-border text-warning" role="status">
                          <span class="visually-hidden">Loading...</span>
                        </div>
                        <div class="spinner-border text-info" role="status">
                          <span class="visually-hidden">Loading...</span>
                        </div>
                        <div class="spinner-border text-light" role="status">
                          <span class="visually-hidden">Loading...</span>
                        </div>
                        <div class="spinner-border text-dark" role="status">
                          <span class="visually-hidden">Loading...</span>
                        </div>
                      </div>
                    </div>
                    <div class="col-md">
                      <div class="text-light small fw-medium">Growing</div>

                      <div class="demo-inline-spacing">
                        <div class="spinner-grow" role="status">
                          <span class="visually-hidden">Loading...</span>
                        </div>
                        <div class="spinner-grow text-primary" role="status">
                          <span class="visually-hidden">Loading...</span>
                        </div>
                        <div class="spinner-grow text-secondary" role="status">
                          <span class="visually-hidden">Loading...</span>
                        </div>
                        <div class="spinner-grow text-success" role="status">
                          <span class="visually-hidden">Loading...</span>
                        </div>
                        <div class="spinner-grow text-danger" role="status">
                          <span class="visually-hidden">Loading...</span>
                        </div>
                        <div class="spinner-grow text-warning" role="status">
                          <span class="visually-hidden">Loading...</span>
                        </div>
                        <div class="spinner-grow text-info" role="status">
                          <span class="visually-hidden">Loading...</span>
                        </div>
                        <div class="spinner-grow text-light" role="status">
                          <span class="visually-hidden">Loading...</span>
                        </div>
                        <div class="spinner-grow text-dark" role="status">
                          <span class="visually-hidden">Loading...</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="card mb-4">
                <h5 class="card-header">Size</h5>
                <div class="card-body">
                  <div class="row gy-3">
                    <div class="col-md">
                      <div class="text-light small fw-medium">Large</div>
                      <div class="demo-inline-spacing">
                        <div class="spinner-border spinner-border-lg text-primary" role="status">
                          <span class="visually-hidden">Loading...</span>
                        </div>
                        <div class="spinner-border spinner-border-lg text-secondary" role="status">
                          <span class="visually-hidden">Loading...</span>
                        </div>
                      </div>
                    </div>

                    <div class="col-md">
                      <div class="text-light small fw-medium">Medium</div>
                      <div class="demo-inline-spacing">
                        <div class="spinner-border text-primary" role="status">
                          <span class="visually-hidden">Loading...</span>
                        </div>
                        <div class="spinner-border text-secondary" role="status">
                          <span class="visually-hidden">Loading...</span>
                        </div>
                      </div>
                    </div>

                    <div class="col-md">
                      <div class="text-light small fw-medium">Small</div>
                      <div class="demo-inline-spacing">
                        <div class="spinner-border spinner-border-sm text-primary" role="status">
                          <span class="visually-hidden">Loading...</span>
                        </div>
                        <div class="spinner-border spinner-border-sm text-secondary" role="status">
                          <span class="visually-hidden">Loading...</span>
                        </div>
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

export default Spinners