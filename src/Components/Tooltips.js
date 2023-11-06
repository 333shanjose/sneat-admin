import React from 'react'

function Tooltips() {
  return (
    <>
     <div class="content-wrapper">

            <div class="container-xxl flex-grow-1 container-p-y">
              <h4 class="py-3 mb-4"><span class="text-muted fw-light">UI elements /</span> Tooltips &amp; popovers</h4>

              <div class="card mb-4">
                <h5 class="card-header">Tooltips</h5>
                <div class="card-body">
                  <div class="text-light small fw-medium">Directions</div>
                  <div class="row demo-vertical-spacing">
                    <div class="col">
                      <button type="button" class="btn btn-primary" data-bs-toggle="tooltip" data-bs-offset="0,4" data-bs-placement="right" data-bs-html="true" data-bs-original-title="<i class='bx bx-trending-up bx-xs' ></i> <span>Tooltip on right</span>">
                        Right
                      </button>
                    </div>
                    <div class="col">
                      <button type="button" class="btn btn-primary" data-bs-toggle="tooltip" data-bs-offset="0,4" data-bs-placement="top" data-bs-html="true" data-bs-original-title="<i class='bx bx-bell bx-xs' ></i> <span>Tooltip on top</span>">
                        Top
                      </button>
                    </div>
                    <div class="col">
                      <button type="button" class="btn btn-primary" data-bs-toggle="tooltip" data-bs-offset="0,4" data-bs-placement="bottom" data-bs-html="true" data-bs-original-title="<i class='bx bx-heart bx-xs' ></i> <span>Tooltip on bottom</span>">
                        Bottom
                      </button>
                    </div>
                    <div class="col">
                      <button type="button" class="btn btn-primary" data-bs-toggle="tooltip" data-bs-offset="0,4" data-bs-placement="left" data-bs-html="true" data-bs-original-title="<i class='bx bx-dollar bx-xs' ></i> <span>Tooltip on left</span>">
                        Left
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div class="card">
                <h5 class="card-header">Popovers</h5>
                <div class="card-body">
                  <div class="text-light small fw-medium">Directions</div>
                  <div class="row demo-vertical-spacing">
                    <div class="col">
                      <button type="button" class="btn btn-primary text-nowrap" data-bs-toggle="popover" data-bs-offset="0,14" data-bs-placement="right" data-bs-html="true" data-bs-content="<p>This is a very beautiful popover, show some love.</p> <div class='d-flex justify-content-between'><button type='button' class='btn btn-sm btn-outline-secondary'>Skip</button><button type='button' class='btn btn-sm btn-primary'>Read More</button></div>" data-bs-original-title="Popover Title">
                        Popover on right
                      </button>
                    </div>
                    <div class="col">
                      <button type="button" class="btn btn-primary text-nowrap" data-bs-toggle="popover" data-bs-offset="0,14" data-bs-placement="top" data-bs-html="true" data-bs-content="<p>This is a very beautiful popover, show some love.</p> <div class='d-flex justify-content-between'><button type='button' class='btn btn-sm btn-outline-secondary'>Skip</button><button type='button' class='btn btn-sm btn-primary'>Read More</button></div>" data-bs-original-title="Popover Title">
                        Popover on top
                      </button>
                    </div>
                    <div class="col">
                      <button type="button" class="btn btn-primary text-nowrap" data-bs-toggle="popover" data-bs-offset="0,14" data-bs-placement="bottom" data-bs-html="true" data-bs-content="<p>This is a very beautiful popover, show some love.</p> <div class='d-flex justify-content-between'><button type='button' class='btn btn-sm btn-outline-secondary'>Skip</button><button type='button' class='btn btn-sm btn-primary'>Read More</button></div>" data-bs-original-title="Popover Title">
                        Popover on bottom
                      </button>
                    </div>
                    <div class="col">
                      <button type="button" class="btn btn-primary text-nowrap" data-bs-toggle="popover" data-bs-offset="0,14" data-bs-placement="left" data-bs-html="true" data-bs-content="<p>This is a very beautiful popover, show some love.</p> <div class='d-flex justify-content-between'><button type='button' class='btn btn-sm btn-outline-secondary'>Skip</button><button type='button' class='btn btn-sm btn-primary'>Read More</button></div>" data-bs-original-title="Popover Title">
                        Popover on left
                      </button>
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

export default Tooltips