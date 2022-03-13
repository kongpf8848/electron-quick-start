{
  "targets": [
    {
      "target_name": "addon",
      "sources": ["addon.cc" ]
    },
    {
      "target_name": "action_after_build",
      "type": "none",
      "dependencies": [ "addon" ],
      "copies": [
          {
            "files": [ "build/Release/addon.node" ],
            "destination": "<(PRODUCT_DIR)/../../../"
          }
      ]
    }
  ]
}