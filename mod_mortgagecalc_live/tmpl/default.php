<?php
/**
  @copyright Copyright (c)2013 Figomago <http://figomago.wordpress.com>
  @license : GNU General Public License v3 or later
----------------------------------------------------------------------- */
// Protect from unauthorized access
defined('_JEXEC') or die('Restricted Access');
?>
 <form id="mcalcLive" action="index.php">
  <table>
      <tr>
          <td>
              <span class="mcalcLive_label"><?php echo JText::_('MOD_MORTGAGECALC_LIVE_PRICE') ?></span>
              <span class="mcalcLive_field"><?php if($show_symbol == 1) echo $curr_symbol; ?>
                  <input name="txtPrice" type="text" id="txtPrice" onkeydown="calcDly('a')"  value="<?php echo $params->get('price', '700,000') ?>" size="12" />
              </span>
          </td>
          <td>
              <span class="mcalcLive_label"><?php echo JText::_('MOD_MORTGAGECALC_LIVE_DEPOSIT') ?></span>
              <span class="mcalcLive_field"><?php if($show_symbol == 1) echo $curr_symbol; ?>
                  <input name="txtDep" type="text" id="txtDep" onkeydown="calcDly('d')" value="<?php echo $params->get('deposit', '90,000') ?>" size="12"/>
              </span>
          </td>
      </tr>
      <tr>
          <td>
              <span class="mcalcLive_label"><?php echo JText::_('MOD_MORTGAGECALC_LIVE_DURATION') ?></span>
              <span class="mcalcLive_field">
                  <input name="txtYears" type="text" id="txtYears" onkeydown="calcDly('c')" value="<?php echo $params->get('years', '30') ?>" size="5"/>
              </span>
          </td>
          <td>
              <span class="mcalcLive_label"><?php echo JText::_('MOD_MORTGAGECALC_LIVE_INTEREST') ?></span>
              <span class="mcalcLive_field">
                  <input name="txtIntr" type="text" id="txtIntr" onkeydown="calcDly('b')" value="<?php echo $params->get('interest', '8.5') ?>" size="5"/>%
              </span>
          </td>
      </tr>
      <tr>
          <td>
              <span class="mcalcLive_label"><?php echo JText::_('MOD_MORTGAGECALC_LIVE_PAYMENT') ?></span>
              <span class="mcalcLive_field"><?php if($show_symbol == 1) echo $curr_symbol; ?>
                  <input name="text5" type="text" id="resultbox" onkeydown="calcDly('x')" value="" size="12"/>
              </span>
          </td>
          <td class="clear"><!-- --></td>
          <td class="clear"><!-- --></td>
      </tr>
  </table>

 <span class="mcalcLive_text"><?php echo JText::_('MOD_MORTGAGECALC_LIVE_INSTR') ?></span>
 </form>
 <?php if($params->get('showfooter', 1) == 1) : ?>
    <div class="mcalcLive_footer"><?php echo JText::_('MOD_MORTGAGECALC_LIVE_FOOTER') ?> <a href="http://figomago.wordpress.com" target="_blank">figomago</a></div>
 <?php endif ?>
<br class="clear" />