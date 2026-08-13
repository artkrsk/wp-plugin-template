<?php

namespace Arts\__NAMESPACE__;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Plugin singleton — the composition root.
 */
class Plugin {
	private static ?Plugin $instance = null;

	public static function instance(): Plugin {
		if ( null === self::$instance ) {
			self::$instance = new self();
			self::$instance->add_actions();
		}
		return self::$instance;
	}

	private function add_actions(): void {
		// Wire WP/Elementor hooks here.
	}
}
