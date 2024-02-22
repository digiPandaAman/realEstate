<?php
/*
Widget-title: Right agents
Widget-preview-image: /assets/img/widgets_preview/right_agents.webp
 */
?>


<section class="explore-feature hp7 section-padding widget_edit_enabled pb-0 seller-bg">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-xl-8">
                <div class="section-heading mb-0">
                    <span>Popular Seller</span>
                    <h3>Owner's Properties</h3>
                </div>
            </div>
        </div>
        
        <div class="recommendedSellerSliderAJ owl-carousel owl-theme mt-4">
            <?php if(!empty($paginated_agents)): $paginated_agents = array_chunk($paginated_agents,2); foreach($paginated_agents as $itemCombo): ?>
            <div class="product-wrap">
                <?php foreach($itemCombo as $item): ?>
                <div class="sellers_card">
                    <div class="card-body">
                        <div class="sellers_img">
                            <img src="<?php echo _simg($item['image_url'], '112x89', true); ?>"
                                alt="<?php  _che($item['name_surname']);?>">
                        </div>
                        <div class="sellers_detail">
                            <div class="sellers_name_row">
                                <h4 class="seller_name_title"><a href="<?php echo $item['agent_url']; ?>"
                                        title="<?php  _che($item['name_surname']);?>"><?php  _che($item['name_surname']);?></a>
                                </h4>
                                <?php if($item['agent_profile']['activated']): ?>
                                <span class="seller_expert">Expert <b>Pro</b></span>
                                <?php endif; ?>
                            </div>
                            <div class="seller_location">
                                <span><?php  _che($item['address']);?></span>
                            </div>
                           <div class="seller_exp_pro">
                                <?php
									$OldDate = new DateTime(date('Y-m-d', strtotime($item['agent_profile']['registration_date'])));
									$now = new DateTime(Date('Y-m-d'));
                                    $gapDate = $OldDate->diff($now);
                                    if($gapDate->y):
                                        $registerText = $gapDate->y.' Year';
                                    else:
                                        if($gapDate->m):
                                            $registerText = $gapDate->m.' Month';
                                        else:
                                            //$registerText = '1 Day';
											$registerText = $gapDate->d?$gapDate->d.' Day':'1 Day';
                                        endif;
                                    endif;
                                ?>
                               <span class="seller_exp"><b>Reg:</b> <?=$registerText;?> Ago</span>
                                <span class="seller_property"><b><?php  _che($item['total_listings_num']);?></b> Properties</span>
                            </div>
                        </div>
                    </div>
                </div>
                <?php endforeach; ?>
            </div>
            <?php endforeach; endif;?>
        </div>
    </div>
</section>



<!--old code -->
<!-- <div class="widget widget-posts widget_edit_enabled widget-right-agents">
    <h3 class="widget-title"><?php echo lang_check('Agents');?></h3>
    <ul>
        <?php if(!empty($paginated_agents)):foreach($paginated_agents as $item): ?>
        <li>
            <div class="contct-info">
                <img src="<?php echo _simg($item['image_url'], '112x89', true); ?>"
                    alt="<?php  _che($item['name_surname']);?>">
                <div class="contct-nf">
                    <h3><a href="<?php echo $item['agent_url']; ?>"
                            title="<?php  _che($item['name_surname']);?>"><?php  _che($item['name_surname']);?></a></h3>
                    <h4><?php  _che($item['address']);?></h4>
                    <?php 
                        $justNums = preg_replace("/[^0-9]/", '',  _ch($item['phone'],'#'));
                    ?>
                    <span><i class="la la-phone"></i><a
                            href="tel://<?php echo $justNums;?>"><?php  _che($item['phone']);?></a></span>
                    <span><i class="la la-envelope-o"></i><a
                            href="mailto:<?php  _che($item['mail']);?>?subject=<?php echo urlencode(lang_check('Estateinqueryfor'));?>:<?php echo urlencode($page_title);?>"
                            title="<?php  _che($item['mail']);?>" class=""><?php  _che($item['mail']);?></a></span>
                </div>
            </div>
        </li>
        <?php endforeach;?>
        <?php else:?>
        <li>
            <div class="alert alert-success">
                <?php echo lang_check('Not found');?>
            </div>
        </li>
        <?php endif;?>
    </ul>
</div> -->
<!--widget-posts end-->