<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit7e75dab0073b6ac22b573d7a4e1a1ca5
{
    public static $prefixLengthsPsr4 = array (
        'B' => 
        array (
            'BitCode\\BitForm\\' => 16,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'BitCode\\BitForm\\' => 
        array (
            0 => __DIR__ . '/../..' . '/includes',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit7e75dab0073b6ac22b573d7a4e1a1ca5::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit7e75dab0073b6ac22b573d7a4e1a1ca5::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit7e75dab0073b6ac22b573d7a4e1a1ca5::$classMap;

        }, null, ClassLoader::class);
    }
}
