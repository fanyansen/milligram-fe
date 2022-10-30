import React from "react";
import Card from "@mui/material/Card";
import ImagesCarousel from "./ImagesCarousel";
import TabsPanel from "./TabsPanel";

export default function Contents() {
  return (
    <Card className="custom-card" sx={{ maxWidth: 2000, minHeight: 800 }}>
      <div className="container contents-container">
        <div className="row">
          <div className="column column-xs-50 content-column">
            <ImagesCarousel />
          </div>
          <div className="column column-xs-50 content-column">
            <div className="container second-container">
              <div className="row">
                <div className="column column-xs-50 dark-grey-background content-column">
                  <h2 className="text-1">Text 1 </h2>
                </div>
                <div className="column column-xs-50 light-grey-background content-column">
                  <h2 className="text-2">Text 2 </h2>
                </div>
              </div>
              <div className="row second-text-row">
                <div className="column column-xs-30 grey-background">
                  <h2 className="text-1">Text 4 </h2>
                </div>
                <div className="column column-xs-30 grey-background">
                  <h2 className="text-1">Text 5 </h2>
                </div>
                <div className="column column-xs-30 grey-background">
                  <h2 className="text-1">Text 6 </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="column column-xs-50">
            <TabsPanel />
          </div>
          <div className="column column-xs-50 padding-0">
            <div className="container second-container">
              <div className="row">
                <div className="column column-xs-50 padding-0">
                  {/* 3 baris */}
                  <div className="container second-container">
                    <div className="row">
                      <div className="column column-100 blue-ocean-background">
                        <h5 className="text-1">Lorem Ipsum</h5>
                      </div>
                    </div>
                    <div className="row">
                      <div className="column column-xs-50 padding-0 dark-grey-background black-border">
                        <h5 className="text-1">Lorem Ipsum</h5>
                      </div>
                      <div className="column column-xs-50 padding-0 dark-grey-background black-border">
                        <h5 className="text-1">Lorem Ipsum</h5>
                      </div>
                    </div>
                    <div className="row">
                      <div className="column column-100 black-border">
                        <p>
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Doloremque eligendi quod quo, possimus soluta
                          molestiae molestias porro reprehenderit ex commodi,
                          repudiandae provident architecto, corrupti ab sint
                          fugit temporibus quisquam repellat.Doloremque eligendi
                          quod quo, possimus soluta molestiae molestias
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="column column-xs-30 padding-0">
                  {/* 2 kolom */}
                  <div className="container second-container">
                    <div className="row">
                      <div className="column column-xs-50 padding-0 light-grey-background grid-height">
                        <h6 className="lorem-90deg">lorem ipsum</h6>
                      </div>
                      <div className="column column-xs-50 padding-0 grey-background">
                        <h6 className="lorem-90deg">lorem ipsum</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="column column-xs-20 padding-0">
                  {/* 2 baris */}
                  <div className="container second-container">
                    <div className="row">
                      <div className="column column-100 light-grey-background">
                        <h6 className="lorem-90deg-rows">Lorem Ipsum</h6>
                      </div>
                    </div>
                    <div className="row">
                      <div className="column column-100 dark-grey-background">
                        <h6 className="lorem-90deg-rows">Lorem Ipsum</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
