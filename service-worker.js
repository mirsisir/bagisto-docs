/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "1.x/advanced/create_payment_method.html",
    "revision": "0109dc32ec444bd4fe345e4f8de53efb"
  },
  {
    "url": "1.x/advanced/create_shipping_method.html",
    "revision": "5365081dcbf0a854ea90c6777d0c2fef"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "4752b66b91bb8dbf00d7d9a756f9986a"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "618bcd6fdbabbb5806307b484bf76c9f"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "8c3992e0d8e18fd71b9ed5e48afb12e7"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "476adf6cd032d1f3fd2b1b40a9da9455"
  },
  {
    "url": "1.x/advanced/render_event.html",
    "revision": "321eaf6506308c0fc84509b75f19ee96"
  },
  {
    "url": "1.x/advanced/security_practice.html",
    "revision": "0f8a4e0bd2ec6df1f4028ba5a74878fc"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "8a68da49e2663e63a1b91da3c0baf2d1"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "9e3eb488fd6a5820ee61fccb30e6ab8e"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "2e3e147e3b3552d5ed1c66514ae9319b"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "adb0069e589f345d45484b9ceecf8511"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "a51733bec0fbb240ddb9ee4f521fe1af"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "1e85949aee4f5b9f7b786efc61ea3f48"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "882808d549cd2f7ab8bf0ce8d87676bc"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "4e12071b85be6d04b696d060a1e3a6b8"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "9ef8f313470fcfddf314384ef143119e"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "8d398d296d4c612c2c3b301c49e20161"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "900e6b358077a6984feb94f1ecfc5f90"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "1ea4dddfd6e5efff21820991441f9acf"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "aae678ef85f9cf36e5e03b431998a7f8"
  },
  {
    "url": "1.x/introduction/folders.html",
    "revision": "db5454175bd785ed896101b20c567cf4"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "912e3e9d6439927091b3d3943886d08e"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "66dfc471a85e4c6b24c68bf804fb8a39"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "0e2674d9c1b29e74f4b2d8f7abfbab02"
  },
  {
    "url": "1.x/introduction/upgrade_to_latest_bagisto.html",
    "revision": "383bb8436c7d44d2347150e6ec4062f3"
  },
  {
    "url": "1.x/packages/add_menu_in_admin.html",
    "revision": "3fcac13affba4461c1ee4d5a52ad86c9"
  },
  {
    "url": "1.x/packages/create_acl.html",
    "revision": "9fe62757b121670f8a90fb3d2d35ebe6"
  },
  {
    "url": "1.x/packages/create_custom_configuration.html",
    "revision": "e1c98456116b1c7e424b3a452f6bc2ea"
  },
  {
    "url": "1.x/packages/create_migrations.html",
    "revision": "0369c58d07a10f9c2e5b1612587f569e"
  },
  {
    "url": "1.x/packages/create_models.html",
    "revision": "50576fb98539e0b87e7dd03ed7fc7df7"
  },
  {
    "url": "1.x/packages/create_package.html",
    "revision": "9d6893359632f6a3a2a8f157d137a690"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "020afcac3dd5a8406d0a52905b5af22d"
  },
  {
    "url": "1.x/packages/store_data_through_repositories.html",
    "revision": "b1480a0f0dbfe62d6638d9e8230f2581"
  },
  {
    "url": "1.x/themes/create_admin_theme.html",
    "revision": "69bc0adb2af5a0edfa45b78f46de148d"
  },
  {
    "url": "1.x/themes/create_theme.html",
    "revision": "8995c1faa489e744f02ea58364dda750"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "25f2bbb37afa087a9403fa0cd759fe31"
  },
  {
    "url": "1.x/translations/change_the_language_of_error_validations_on_your_store.html",
    "revision": "ed15f8cd83edef5e67e540d23e4251e5"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "eb71c07d2af5e86025ecb8d6ba001a92"
  },
  {
    "url": "1.x/translations/translation_based_on_locale.html",
    "revision": "06e4a88f7b4a4115d599ba978de697e2"
  },
  {
    "url": "1.x/user_guides/cart_catalog_rule.html",
    "revision": "6211cd446bd7859a6e852bef1cd45a29"
  },
  {
    "url": "1.x/user_guides/cart_rule.html",
    "revision": "352e43b44ddaa7f59f40d75e3cd326c9"
  },
  {
    "url": "1.x/user_guides/index.html",
    "revision": "4ae4af8d8545e96da7f7cc9df69ed98f"
  },
  {
    "url": "404.html",
    "revision": "3d17d9b3263903e82ac7d57aa237ba54"
  },
  {
    "url": "assets/css/0.styles.fb7b26fb.css",
    "revision": "d397ded3f75e375ade473ed68295d888"
  },
  {
    "url": "assets/img/add-locale-bagisto.b2e2cfb9.png",
    "revision": "b2e2cfb94cf27c4c873e38113fa70aaf"
  },
  {
    "url": "assets/img/admin-acl-output.33cbb854.png",
    "revision": "33cbb8542307d97dce7e411f4e1ffee2"
  },
  {
    "url": "assets/img/admin-custom-config-output.ad6536ab.png",
    "revision": "ad6536ab0b05048c23992f08943b6d1d"
  },
  {
    "url": "assets/img/admin-menu-output.a5949c80.png",
    "revision": "a5949c80bf47f4a37c0f8d330f1f139c"
  },
  {
    "url": "assets/img/arrabic-attribute.4d7a4275.png",
    "revision": "4d7a4275690cfe606cdb2f1babf87cc5"
  },
  {
    "url": "assets/img/bagisto_add_info.78af382e.jpg",
    "revision": "78af382e00c5ed610f08e7dcb25de296"
  },
  {
    "url": "assets/img/bagisto_attribute.a6fc572b.jpg",
    "revision": "a6fc572b5095c9086b4b9594c7627dbb"
  },
  {
    "url": "assets/img/bagisto_cart_add.63562e08.jpg",
    "revision": "63562e08b02018b7b6a8826f9bb124f6"
  },
  {
    "url": "assets/img/bagisto_cart_guest.d853001d.jpg",
    "revision": "d853001da175e958725f6cf956e31e84"
  },
  {
    "url": "assets/img/bagisto_cart_remove_item.3b5df823.jpg",
    "revision": "3b5df82328f5369892e46b182c1fb326"
  },
  {
    "url": "assets/img/bagisto_cart_update.3b860220.jpg",
    "revision": "3b860220a366af90e600fd35c087d67b"
  },
  {
    "url": "assets/img/bagisto_cart.3cc30a8b.jpg",
    "revision": "3cc30a8be1ec377e6a4aa9c4bb1cc4d5"
  },
  {
    "url": "assets/img/bagisto_config_attr.83af48dd.jpg",
    "revision": "83af48ddf4fc985007f39acec9cc37e3"
  },
  {
    "url": "assets/img/bagisto_config.325d4e50.jpg",
    "revision": "325d4e50a5fd49d4ec8a9c447f21a6e6"
  },
  {
    "url": "assets/img/bagisto_move_to_wishlist.092fc8ae.jpg",
    "revision": "092fc8ae6b7ce543f91fcbcb840ebd82"
  },
  {
    "url": "assets/img/bagisto_orders_id.47d67a0d.jpg",
    "revision": "47d67a0d48c7eb4471788608a266ebd0"
  },
  {
    "url": "assets/img/bagisto_orders_no_pag.eb8fd609.jpg",
    "revision": "eb8fd6090b445f1a375c41d22bdb9405"
  },
  {
    "url": "assets/img/bagisto_prod_color.54846a87.jpg",
    "revision": "54846a878f4e58126066ca83a1f698e4"
  },
  {
    "url": "assets/img/bagisto_prod_price_config.1c3285d1.jpg",
    "revision": "1c3285d10a818abb2dca20a777b79258"
  },
  {
    "url": "assets/img/bagisto_prod_price_simple.78ef8f5a.jpg",
    "revision": "78ef8f5ac73bae616e5e0794dfeb7f42"
  },
  {
    "url": "assets/img/bagisto_prod_size.2fdc1d32.jpg",
    "revision": "2fdc1d32ecc5200a7a65d99b44e600fb"
  },
  {
    "url": "assets/img/bagisto_save_address.633cf573.jpg",
    "revision": "633cf57391403cf1df62f8dfe80d6661"
  },
  {
    "url": "assets/img/bagisto_save_order.c2fab81f.jpg",
    "revision": "c2fab81f906b0dda24ab128e2100f0e3"
  },
  {
    "url": "assets/img/bagisto_save_payment.99edb31c.jpg",
    "revision": "99edb31ca6dbf31d3261d528d48f120f"
  },
  {
    "url": "assets/img/bagisto_save_shipping.6c8d23d1.jpg",
    "revision": "6c8d23d1f29b3905c0742e6fe9dc2a03"
  },
  {
    "url": "assets/img/bagisto_ship_order_id.367b77a9.jpg",
    "revision": "367b77a9b47802107f443338b7ff1cfe"
  },
  {
    "url": "assets/img/bagisto_shipments.e6134a4b.jpg",
    "revision": "e6134a4b8b604b1756ab3ef108884406"
  },
  {
    "url": "assets/img/bagisto_wishlist_page.de525699.jpg",
    "revision": "de5256999417cca7f6ab7503a5b109d1"
  },
  {
    "url": "assets/img/catageory-in-arabic.4b55c745.png",
    "revision": "4b55c745b858c4aac3044fa348caf6a7"
  },
  {
    "url": "assets/img/channel-setting-in-bagisto.a7a72cb5.png",
    "revision": "a7a72cb5af650f7e582f8deae80e4f99"
  },
  {
    "url": "assets/img/demo_products.86acc2d1.jpg",
    "revision": "86acc2d17a24f156e867f75404f9e121"
  },
  {
    "url": "assets/img/front-end-in-arabic.f7c759e0.png",
    "revision": "f7c759e055265bf9ebd9df156e22c9ab"
  },
  {
    "url": "assets/img/front-end.9aaeb0de.png",
    "revision": "9aaeb0de8e5707aa4afa1845e2fa1f4d"
  },
  {
    "url": "assets/img/hello-world-package-output.2f3c248f.png",
    "revision": "2f3c248fcf0bcdb3a497646485084147"
  },
  {
    "url": "assets/img/helloworld-admin-browser-output.58d525cb.png",
    "revision": "58d525cbaf78c5763ac8f557cdd31e9f"
  },
  {
    "url": "assets/img/helloworld-shop-browser-output.036ed5d9.png",
    "revision": "036ed5d98b58f5887a0cde7d6a874bd5"
  },
  {
    "url": "assets/img/language-changes.a799195d.png",
    "revision": "a799195df5c2def1f7798b6296eb0659"
  },
  {
    "url": "assets/img/locale-setup.a0047ee5.png",
    "revision": "a0047ee598bf517ca89e565539e444cc"
  },
  {
    "url": "assets/img/locale-trans.eed57105.png",
    "revision": "eed57105bf11bb1ad460c9e09ec9e207"
  },
  {
    "url": "assets/img/locale.b190a2d4.png",
    "revision": "b190a2d4e2ed61a1a75b829f6af4bdcf"
  },
  {
    "url": "assets/img/product-in-arabic.e634c43f.png",
    "revision": "e634c43ff0331dcf5ff91211017c6f1f"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/translation.96b21cfa.png",
    "revision": "96b21cfa473af2e88086d0ccdebb40e4"
  },
  {
    "url": "assets/js/10.1098e6be.js",
    "revision": "0042781adf05c8497e5dbc90078071ca"
  },
  {
    "url": "assets/js/11.c4b3ffb4.js",
    "revision": "6949d0e19a05ad6f7895e50bed8118bd"
  },
  {
    "url": "assets/js/12.6977155c.js",
    "revision": "bbaebc05913371817ce788efba196948"
  },
  {
    "url": "assets/js/13.084959f1.js",
    "revision": "01a3b0d866b318e329c88770efdab07f"
  },
  {
    "url": "assets/js/14.9fecf3c2.js",
    "revision": "cf3bb51dfed9130f82ffe43575456e48"
  },
  {
    "url": "assets/js/15.ea1a6d8e.js",
    "revision": "24e19d69c42e9fcfdb689bd92310d303"
  },
  {
    "url": "assets/js/16.7b34cfb3.js",
    "revision": "f2e3263ffdb4680cfe034e9a71ec0841"
  },
  {
    "url": "assets/js/17.8b90e60d.js",
    "revision": "1bdccdafeb8ddacd14eb3a284b6456aa"
  },
  {
    "url": "assets/js/18.e1eb326c.js",
    "revision": "c61c82e810dd0a4538366dde9cb4a940"
  },
  {
    "url": "assets/js/19.5951b2d9.js",
    "revision": "9f088af53895832e492f6eb2e2110036"
  },
  {
    "url": "assets/js/2.7198bc1f.js",
    "revision": "3f33c7bb37cf4ae0c4b3187521032882"
  },
  {
    "url": "assets/js/20.96a97e4b.js",
    "revision": "11f8ef0f71a192a6f7dec29f5425d202"
  },
  {
    "url": "assets/js/21.ee6f1bb1.js",
    "revision": "f96710df26e53f1cc67f738f04f8238a"
  },
  {
    "url": "assets/js/22.ffec6294.js",
    "revision": "dd6a8e2f2156739744de63b2e50ddf7e"
  },
  {
    "url": "assets/js/23.88a1d840.js",
    "revision": "f845b8420bf53b5ef13e0e5896f4f221"
  },
  {
    "url": "assets/js/24.87d24720.js",
    "revision": "6962f0e0627067f60d5daa0852161d0e"
  },
  {
    "url": "assets/js/25.65beba47.js",
    "revision": "810660f8005634b994aaf9bea5181ddb"
  },
  {
    "url": "assets/js/26.ed227937.js",
    "revision": "afdba4bbb95b6896eaf80d1c9b320165"
  },
  {
    "url": "assets/js/27.975a0327.js",
    "revision": "d90b4d184121d9833ff0a0d9c765d5ed"
  },
  {
    "url": "assets/js/28.b07629ad.js",
    "revision": "aa05481ddd6ea2025b037dce4d318a7a"
  },
  {
    "url": "assets/js/29.267f8340.js",
    "revision": "274e2b18939b3d0ac312c9801f6ee8bf"
  },
  {
    "url": "assets/js/3.51e3d6dd.js",
    "revision": "8ce113d7644c2d588571d746e0f35b22"
  },
  {
    "url": "assets/js/30.bb57d973.js",
    "revision": "f586ced88960907f6b4d4963d82f653f"
  },
  {
    "url": "assets/js/31.3ce8f2e9.js",
    "revision": "22453be7d3123166775e4fae3c672166"
  },
  {
    "url": "assets/js/32.1a5c643f.js",
    "revision": "7c40dbf3fff46d579220908322b05fc9"
  },
  {
    "url": "assets/js/33.954e594e.js",
    "revision": "2ab662b8a963bb8f5a0dd5ed34455cd4"
  },
  {
    "url": "assets/js/34.81ba4579.js",
    "revision": "8d5e8580aaa11951757ba72c36bf6448"
  },
  {
    "url": "assets/js/35.23b51044.js",
    "revision": "21b95122426478aed12a99eb2de55ce1"
  },
  {
    "url": "assets/js/36.4ca82cc2.js",
    "revision": "6ba4d80e52b680ac0c173fbe79483dfe"
  },
  {
    "url": "assets/js/37.f516aff4.js",
    "revision": "cdd47bf1efd258c0d731fbb1d72e5a00"
  },
  {
    "url": "assets/js/38.ee63e649.js",
    "revision": "c0e4dfeb186858e854ca1ed8ea626459"
  },
  {
    "url": "assets/js/39.a7e811c3.js",
    "revision": "12fc3a55af0bbe7a7a2f6508f353ea57"
  },
  {
    "url": "assets/js/4.726498fb.js",
    "revision": "aa18574906f27e1c64cd68088fc9d1a1"
  },
  {
    "url": "assets/js/40.9f5f2e45.js",
    "revision": "d1d070794ee104bc77c56b3d3605033b"
  },
  {
    "url": "assets/js/41.38527f55.js",
    "revision": "45d63fded22687c1b8658f86c20f8fe5"
  },
  {
    "url": "assets/js/42.ac7a0054.js",
    "revision": "acf7da35b510206d468dea39f578d40c"
  },
  {
    "url": "assets/js/43.b40521db.js",
    "revision": "b7b0a8a43761a359791f3e1fbd2dbb17"
  },
  {
    "url": "assets/js/44.5d6d256c.js",
    "revision": "995620ee6b025b25abe101280745330f"
  },
  {
    "url": "assets/js/45.f4e796d5.js",
    "revision": "c9c2b4e2c737389f5d6dbb20fc5c12cc"
  },
  {
    "url": "assets/js/46.ca609956.js",
    "revision": "614dd45d4e85dbd4051d843200911bc8"
  },
  {
    "url": "assets/js/47.d7e15376.js",
    "revision": "a4e2db92b16e6f9b7038c30ced3b4e02"
  },
  {
    "url": "assets/js/48.087ff28f.js",
    "revision": "2e39015da5c35214b294b2a62bd7898f"
  },
  {
    "url": "assets/js/49.d9acdef0.js",
    "revision": "8cc31e5462fd03eb739a0251b18e329f"
  },
  {
    "url": "assets/js/5.fceb8088.js",
    "revision": "f358fbd257629ff638fa344877ea2ad1"
  },
  {
    "url": "assets/js/6.0f6d3c49.js",
    "revision": "5b3b526cbb5c8430c4d894a6478f6f0b"
  },
  {
    "url": "assets/js/7.f04c60d5.js",
    "revision": "0c09c8036d76c40829bee17ab6a96a82"
  },
  {
    "url": "assets/js/8.b027e073.js",
    "revision": "7ff218db94454e6fcfd5fe62d831dd80"
  },
  {
    "url": "assets/js/9.0b434090.js",
    "revision": "5ef81159651523b18d236bdd07b9b806"
  },
  {
    "url": "assets/js/app.452c7e93.js",
    "revision": "66a94dc31cda9328d32a6c77160cf351"
  },
  {
    "url": "index.html",
    "revision": "2a658bf917d6d3e7420aed4cc657d212"
  },
  {
    "url": "logo.png",
    "revision": "7623b31ea8912e775aa903f3da491179"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
