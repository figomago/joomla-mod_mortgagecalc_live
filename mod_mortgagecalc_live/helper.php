<?php

/**
  @copyright Copyright (c)2013 Figomago <http://figomago.wordpress.com> 
  @license : GNU General Public License v3 or later
----------------------------------------------------------------------- */

// Protect from unauthorized access
defined('_JEXEC') or die('Restricted Access');
  /**
  * Live Mortgage Calculator Module Helper
  *
  * @static
  */
  class modMortgagecalcLiveHelper
  {
  /**
  * Gets an array of items
  *
  * @param JParameter Module parameters
  * @return mixed Array of items, false on failure
  */
    function & getItems(&$params)
    {
      $db = & JFactory :: getDBO();
      $pf_limit = $params->get('prefetch', 5);
      $query = modMortgagecalcLiveHelper::_buildQuery($pf_limit);
      $db->setQuery($query);
      $instance = $db->loadObjectList();
      return $instance;
    }


  /**
  * Gets an SQL query string
  *
  * @return string SQL query
  */
    function _buildQuery($pf_limit)
    {
      $query_limit = ($pf_limit == 0)? '' : 'LIMIT '.$pf_limit;
      $db = & JFactory :: getDBO();
      return 'SELECT id FROM ' . $db->nameQuote('#__') . ' WHERE ' . $db->nameQuote('published') . ' = 1   AND (DATE_FORMAT(expiry_date,"%Y-%m-%d") >= CURDATE() OR DATE_FORMAT(expiry_date,"%Y-%m-%d") = 0000-00-00)
        ORDER BY id DESC '.$query_limit;
    }

    function getConfig() {
      $db = & JFactory :: getDBO();
      $query = 'SELECT x FROM ' . $db->nameQuote('#__') . ' WHERE id=1';
      $db->setQuery($query);
      return $db->loadResult();
    }

  }


?>