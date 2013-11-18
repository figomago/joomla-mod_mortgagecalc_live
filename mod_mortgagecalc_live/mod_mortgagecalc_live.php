<?php
/**
  @copyright Copyright (c)2013 Figomago <http://figomago.wordpress.com> 
  @license : GNU General Public License v3 or later
----------------------------------------------------------------------- */

// Protect from unauthorized access
defined('_JEXEC') or die('Restricted Access');

// require_once JPATH_SITE.'/components/com_jobboard/router.php';
jimport('joomla.application.component.helper');

/*if (!JComponentHelper::isEnabled('com_jobboard', true))
{
JError::raiseError('Component not found or not enabled', JText('This module requires the Job Board component'));
}*/
 JHTML::_('behavior.mootools');
 $document =& JFactory::getDocument();
 $document->addStyleSheet('modules/mod_mortgagecalc_live/css/style.css');
 $document->addScript('modules/mod_mortgagecalc_live/js/mortgagecalc_live.js');


require_once(dirname(__FILE__).DS.'helper.php');
//$scroll_jobs =& modMortgagecalcLiveHelper::getItems($params);
//$use_location = & modMortgagecalcLiveHelper::getConfig();
//$view_limit = 31.2 * $params->get('limit', 5);
//$show_stopstart = $params->get('stopstart', 1);
$curr_symbol = $params->get('curr_symbol', '$');
$show_symbol = $params->get('showsymbol', 1);
require(JModuleHelper::getLayoutPath('mod_mortgagecalc_live'));

?>