<?php

/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', "cricket" );

/** Database username */
define( 'DB_USER', "root" );

/** Database password */
define( 'DB_PASSWORD', "" );

/** Database hostname */
define( 'DB_HOST', "localhost" );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '8Lx3Ne,y!Wu8g=X9a`JaA0{!2HD>t{m|5SRra=aq$+6g/_=w9(Gl*-6+Lp&u.9+x,y?rch2aV<<|Fp,U' );
define( 'SECURE_AUTH_KEY',  'pI*RF#ccX`^`YK6E-^*$(YzC]#azxS(yFt%BmFJsEsC#^4,!;`t,I!fMCr^*d]x!>n5{,cW!cf_$<t$t' );
define( 'LOGGED_IN_KEY',    ')InlO-%~-9x=XB^Pe!zC%VtM_LWgQ|.mF5Tyh]LAW-4T`y2:<5GROn]*;muGYC1G#<AWfWr&]?KexPa(' );
define( 'NONCE_KEY',        '@H/eeFuf{vvUhr#8%t!*&P5HYJq_-%P,g8/R5nvzAt]jLsR2Xt!>MHY/u|/TK)oBB.@8~.v3Y&S.}bfd' );
define( 'AUTH_SALT',        '!uI#xt0K,b;g33hTm+FsO{AO^F!$o/KSbP*T5{`;$cC[8xmutcLsS!&?7]9C/Vdx)GY{L;T[V->Sn]$!' );
define( 'SECURE_AUTH_SALT', 'X]dT@[D2))0Qfm/b^~k;L7Qj;3`,{0oF9M9!-iM==s!t!{ty5_h9=g5pGl74$C|;F*eF($q8tbqmO|iy' );
define( 'LOGGED_IN_SALT',   '=.r`aHsC!G[OgL!vz6?.@T`%a&73%UP5(&{@~%N+f@~_QR}Dp%<kAoIqbUE^lDe0Hczn!>j0b<U!kAQ$' );
define( 'NONCE_SALT',       '=ZQHmZbb(.ey>mekzj`e;s9>aH2~)B(+D*>w}1a3)*.GkB_FYL7jihXO:]N~Y!)y{tg|o>b>PEu9tt!&' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */

define( 'WP_DEBUG', true );
define( 'WP_DEBUG_LOG', true );
define( 'WP_DEBUG_DISPLAY', 0 );

/* Add any custom values between this line and the "stop editing" line. */



define( 'WP_SITEURL', 'http://localhost/swartdev' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname(__FILE__) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
define('JWT_AUTH_SECRET_KEY', 'he342sfiha98j08bnm8smvngvf36nenhsem7nsvnx3878925jl686a65'); // Replace 'your-top-secret-key' with a strong unique string.

define('JWT_AUTH_CORS_ENABLE', true);


