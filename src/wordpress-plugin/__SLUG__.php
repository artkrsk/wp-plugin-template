<?php
/**
 * Plugin Name: __NAME__
 * Plugin URI: https://artemsemkin.com/plugins/__SLUG__/
 * Description: __NAME__.
 * Version: 1.0.0
 * Author: Artem Semkin
 * Author URI: https://artemsemkin.com
 * License: GPLv3
 * License URI: https://www.gnu.org/licenses/gpl-3.0
 * Text Domain: __SLUG__
 * Requires at least: 6.0
 * Tested up to: 7.1
 * Requires PHP: 8.0
 * Requires Plugins: elementor
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

define( '__VERSION_CONSTANT__', '1.0.0' );
define( '__CONSTANT___PLUGIN_FILE', __FILE__ );

require_once __DIR__ . '/vendor/autoload.php';

add_action( 'plugins_loaded', array( \Arts\__NAMESPACE__\Plugin::class, 'instance' ) );
