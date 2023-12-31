import React from 'react'

function Badges() {
  return (
    <>
    <div class="content-wrapper">

            <div class="container-xxl flex-grow-1 container-p-y">
              <h4 class="py-3 mb-4"><span class="text-muted fw-light">UI elements /</span> Badges</h4>

              <div class="row">
                <div class="col-lg">
                  <div class="card mb-4">
                    <h5 class="card-header">Basic Badges</h5>
                    <div class="card-body">
                      <div class="text-light small fw-medium">Default</div>
                      <div class="demo-inline-spacing">
                        <span class="badge bg-primary">Primary</span>
                        <span class="badge bg-secondary">Secondary</span>
                        <span class="badge bg-success">Success</span>
                        <span class="badge bg-danger">Danger</span>
                        <span class="badge bg-warning">Warning</span>
                        <span class="badge bg-info">Info</span>
                        <span class="badge bg-dark">Dark</span>
                      </div>
                    </div>
                    <hr class="m-0"/>
                    <div class="card-body">
                      <div class="text-light small fw-medium">Pills</div>

                      <div class="demo-inline-spacing">
                        <span class="badge rounded-pill bg-primary">Primary</span>
                        <span class="badge rounded-pill bg-secondary">Secondary</span>
                        <span class="badge rounded-pill bg-success">Success</span>
                        <span class="badge rounded-pill bg-danger">Danger</span>
                        <span class="badge rounded-pill bg-warning">Warning</span>
                        <span class="badge rounded-pill bg-info">Info</span>
                        <span class="badge rounded-pill bg-dark">Dark</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-lg">
                  <div class="card mb-4">
                    <h5 class="card-header">Label Badges</h5>
                    <div class="card-body">
                      <div class="text-light small fw-medium">Label Default</div>

                      <div class="demo-inline-spacing">
                        <span class="badge bg-label-primary">Primary</span>
                        <span class="badge bg-label-secondary">Secondary</span>
                        <span class="badge bg-label-success">Success</span>
                        <span class="badge bg-label-danger">Danger</span>
                        <span class="badge bg-label-warning">Warning</span>
                        <span class="badge bg-label-info">Info</span>
                        <span class="badge bg-label-dark">Dark</span>
                      </div>
                    </div>
                    <hr class="m-0"/>
                    <div class="card-body">
                      <div class="text-light small fw-medium">Label Pills</div>

                      <div class="demo-inline-spacing">
                        <span class="badge rounded-pill bg-label-primary">Primary</span>
                        <span class="badge rounded-pill bg-label-secondary">Secondary</span>
                        <span class="badge rounded-pill bg-label-success">Success</span>
                        <span class="badge rounded-pill bg-label-danger">Danger</span>
                        <span class="badge rounded-pill bg-label-warning">Warning</span>
                        <span class="badge rounded-pill bg-label-info">Info</span>
                        <span class="badge rounded-pill bg-label-dark">Dark</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-lg">
                  <div class="card mb-4">
                    <h5 class="card-header">Button with Badges</h5>
                    <div class="card-body">
                      <div class="row gy-3">
                        <div class="col-sm-4">
                          <small class="text-light fw-medium">Default</small>
                          <div class="demo-inline-spacing">
                            <button type="button" class="btn btn-primary">
                              Text
                              <span class="badge bg-white text-primary ms-1">4</span>
                            </button>
                            <button type="button" class="btn btn-primary">
                              Text
                              <span class="badge bg-secondary rounded-pill ms-1">4</span>
                            </button>
                          </div>
                        </div>
                        <div class="col-sm-4">
                          <small class="text-light fw-medium">Label</small>
                          <div class="demo-inline-spacing">
                            <button type="button" class="btn btn-outline-primary">
                              Text
                              <span class="badge bg-white text-primary ms-1">4</span>
                            </button>
                            <button type="button" class="btn btn-outline-primary">
                              Text
                              <span class="badge bg-secondary rounded-pill ms-1">4</span>
                            </button>
                          </div>
                        </div>
                        <div class="col-sm-4">
                          <small class="text-light fw-medium">Outline</small>
                          <div class="demo-inline-spacing">
                            <button type="button" class="btn btn-outline-primary">
                              Text
                              <span class="badge ms-1">4</span>
                            </button>
                            <button type="button" class="btn btn-outline-secondary">
                              Text
                              <span class="badge rounded-pill ms-1">4</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-12">
                  <div class="card mb-4">
                    <h5 class="card-header">Badge Circle &amp; Square Style</h5>
                    <div class="card-body">
                      <div class="row gy-3">
                        <div class="col-xl-6">
                          <h6>Basic</h6>
                          <div class="text-light small fw-medium mb-2">Default</div>
                          <div class="demo-inline-spacing">
                            <p>
                              <span class="badge badge-center rounded-pill bg-primary">1</span>
                              <span class="badge badge-center rounded-pill bg-secondary">2</span>
                              <span class="badge badge-center rounded-pill bg-success">3</span>
                              <span class="badge badge-center rounded-pill bg-danger">4</span>
                              <span class="badge badge-center rounded-pill bg-warning">5</span>
                              <span class="badge badge-center rounded-pill bg-info">6</span>
                            </p>
                            <p>
                              <span class="badge badge-center bg-primary">1</span>
                              <span class="badge badge-center bg-secondary">2</span>
                              <span class="badge badge-center bg-success">3</span>
                              <span class="badge badge-center bg-danger">4</span>
                              <span class="badge badge-center bg-warning">5</span>
                              <span class="badge badge-center bg-info">6</span>
                            </p>
                          </div>
                        </div>
                        <div class="col-xl-6">
                          <h6>Label</h6>
                          <div class="text-light small fw-medium mb-2">Default</div>
                          <div class="demo-inline-spacing">
                            <p>
                              <span class="badge badge-center rounded-pill bg-label-primary">1</span>
                              <span class="badge badge-center rounded-pill bg-label-secondary">2</span>
                              <span class="badge badge-center rounded-pill bg-label-success">3</span>
                              <span class="badge badge-center rounded-pill bg-label-danger">4</span>
                              <span class="badge badge-center rounded-pill bg-label-warning">5</span>
                              <span class="badge badge-center rounded-pill bg-label-info">6</span>
                            </p>
                            <p>
                              <span class="badge badge-center bg-label-primary">1</span>
                              <span class="badge badge-center bg-label-secondary">2</span>
                              <span class="badge badge-center bg-label-success">3</span>
                              <span class="badge badge-center bg-label-danger">4</span>
                              <span class="badge badge-center bg-label-warning">5</span>
                              <span class="badge badge-center bg-label-info">6</span>
                            </p>
                          </div>
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

export default Badges