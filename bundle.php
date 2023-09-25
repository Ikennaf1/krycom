<?php

$bundles = "";
$dest = "./assets/js/script.js";
$destMin = "./assets/js/script.min.js";
$scripts = [
    "./assets/js/Exchanger.js",
    "./assets/js/nav.js",
    "./assets/js/coin_compare.js",
];

foreach ($scripts as $script) {
    $bundle = file_get_contents($script);
    $bundles .= $bundle;
}

file_put_contents($dest, $bundles);

exec("uglifyjs $dest -o $destMin");

// unlink("dist/blinds.js");
