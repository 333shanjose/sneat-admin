import React from 'react'

function Footer() {
  return (
    <>
     <div class="content-wrapper">

            <div class="container-xxl flex-grow-1 container-p-y">
              <h4 class="py-3 mb-4"><span class="text-muted fw-light">UI elements /</span> Footer</h4>

              <section id="basic-footer">
                <h5 class="pb-1 mt-5 mb-4">Basic Footer</h5>

                <footer class="footer bg-light">
                  <div class="container-fluid d-flex flex-md-row flex-column justify-content-between align-items-md-center gap-1 container-p-x py-3">
                    <div>
                      <a href="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/html/vertical-menu-template/" target="_blank" class="footer-text fw-bold">Sneat</a>
                      ©
                    </div>
                    <div>
                      <a href="https://themeselection.com/license/" class="footer-link me-4" target="_blank">License</a>
                      <a href="javascript:void(0)" class="footer-link me-4">Help</a>
                      <a href="javascript:void(0)" class="footer-link me-4">Contact</a>
                      <a href="javascript:void(0)" class="footer-link">Terms &amp; Conditions</a>
                    </div>
                  </div>
                </footer>
              </section>
              <hr class="container-m-nx my-5"/>

              <section id="component-footer">
                <h5 class="pb-1 mb-4">Footer with Elements</h5>

                <footer class="footer bg-light">
                  <div class="container-fluid d-flex flex-md-row flex-column justify-content-between align-items-md-center gap-1 container-p-x py-3">
                    <div>
                      <a href="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/html/vertical-menu-template/" target="_blank" class="footer-text fw-bold">Sneat</a>
                      ©
                    </div>
                    <div>
                      <div class="form-check form-control-sm footer-link me-3">
                        <input class="form-check-input" type="checkbox"  value="" id="customCheck2" checked  />
                        <label class="form-check-label" for="customCheck2"> Show </label>
                      </div>
                      <div class="dropdown dropup footer-link me-3">
                        <button type="button" class="btn btn-sm btn-outline-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Currency
                        </button>
                        <div class="dropdown-menu dropdown-menu-end">
                          <a class="dropdown-item" href="javascript:void(0);"><i class="bx bx-dollar"></i> USD</a>
                          <a class="dropdown-item" href="javascript:void(0);"><i class="bx bx-euro"></i> Euro</a>
                          <a class="dropdown-item" href="javascript:void(0);"><i class="bx bx-pound"></i> Pound</a>
                          <div class="dropdown-divider"></div>
                          <a class="dropdown-item" href="javascript:void(0);"><i class="bx bx-bitcoin"></i> Bitcoin</a>
                        </div>
                      </div>
                      <a href="javascript:void(0)" class="btn btn-sm btn-outline-danger"><i class="bx bx-log-out-circle me-1"></i>Logout</a>
                    </div>
                  </div>
                </footer>
              </section>
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

export default Footer