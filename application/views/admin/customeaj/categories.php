<div class="page-head">
    <h2 class="pull-left">Custome Categories</h2>

    <!-- Breadcrumb -->
    <div class="bread-crumb pull-right">
        <a href="<?php echo site_url('admin') ?>"><i class="icon-home"></i> <?=lang('Home');?></a>
        <!-- Divider -->
        <span class="divider">/</span>
        <a class="bread-current" href="<?=site_url('admin/customaj');?>"><?='Custom Page';?></a>
        <!-- Divider -->
        <span class="divider">/</span>
        <a class="bread-current"
            href="#"><?php echo lang('Categories') ?></a>
    </div>
    <div class="clearfix"></div>
</div>

<div class="matter">
    <div class="container" id="edit-form">
        <div class="row">
            <div class="col-md-12">
                <div class="widget wlightblue">

                    <div class="widget-head">
                        <div class="pull-left">Categories</div>
                        <div class="widget-icons pull-right">
                            <a class="wminimize" href="#"><i class="icon-chevron-up"></i></a>
                        </div>
                        <div class="clearfix"></div>
                    </div>

                    <div class="widget-content">
                        <div class="padd">
                            <?=validation_errors();?>
                            <?php 
                                if ($this->session->flashdata('message')): 
                                    echo $this->session->flashdata('message');
                                endif;
                            ?>
                            <?php if ($this->session->flashdata('error')): ?>
                            <p class="label label-important validation"><?=$this->session->flashdata('error');?></p>
                            <?php endif; ?>
                            <hr />

                            <!-- Form starts.  -->
                            <?=form_open(NULL, array('class' => 'form-horizontal', 'role' => 'form'));?>

                            <div class="form-group">
                                <label class="col-lg-3 control-label"><?php echo lang('Parent') ?></label>
                                <div class="col-lg-9">
                                    <?=form_dropdown('parent_id', $treefield_no_parents, $this->input->post('parent_id') ? $this->input->post('parent_id') : $treefield->parent_id, 'class="form-control"') ?>
                                </div>
                            </div>
                            <?php if (config_item('tree_font_icon_code_list')!==FALSE && !empty(config_item('tree_font_icon_code_list'))): ?>
                            <div class="form-group">
                                <label class="col-lg-3 control-label"><?php echo lang_check('Font icon code') ?></label>
                                <div class="col-lg-9">
                                    <?php
                                          $icons_code_list =  config_item('tree_font_icon_code_list');
                                          $icons_code_list = explode(',', $icons_code_list);
                                          $icons_code_list = array_map('trim', $icons_code_list);
                                          /*$icons_code_list = array_combine($icons_code_list,$icons_code_list);
                                          $icons_code_list = array_merge(array(''=>lang_check('Select icon')), $icons_code_list);*/
                                        ?>
                                    <select class="form-control selectpicker" name="font_icon_code"
                                        id="input_font_icon_code">
                                        <option value=""><?php echo lang_check('Select icon');?></option>
                                        <?php foreach ($icons_code_list as $key => $value):?>
                                        <?php
                                            $val = $this->input->post('font_icon_code') ? $this->input->post('font_icon_code') : $treefield->font_icon_code;
                                            ?>
                                        <option value="<?php echo $value;?>" data-icon="<?php echo $value;?>"
                                            <?php echo ($val==$value) ? 'selected="selected"': '';?>>
                                            <?php echo $value;?></option>
                                        <?php endforeach;?>
                                    </select>
                                </div>
                            </div>
                            <?php endif; ?>
                            <div class="form-group">
                                <label class="col-lg-3 control-label"><?php echo lang_check('Value') ?></label>
                                <div class="col-lg-9">
                                    <?=form_input('value', set_value('value', $treefield->{"value"}), 'class="form-control" id="inputValue" placeholder="'.lang_check('Value').'"');?>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="col-lg-offset-3 col-lg-9">
                                    <?=form_submit('submit', lang('Save'), 'class="btn btn-primary"');?>
                                </div>
                            </div>
                            <?=form_close();?>
                        </div>
                    </div>

                    <div class="widget-foot">
                        <!-- Footer goes here -->
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-md-12">
                <div class="widget wblue">
                    <div class="widget-head">
                        <div class="pull-left">Categories Values</div>
                        <div class="widget-icons pull-right">
                            <a class="wminimize" href="#"><i class="icon-chevron-up"></i></a>
                        </div>
                        <div class="clearfix"></div>
                    </div>

                    <div class="widget-content">
                        <table class="table table-bordered footable table-striped">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Root</th>
                                    <th>Parent #</th>
                                    <!-- <th class="control">Edit</th> -->
                                    <th class="control">Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                <?php if (sw_count($tree_listings)): foreach ($tree_listings as $listing_item): ?>
                                <tr>
                                    <td><?=$listing_item->id;?></td>
                                    <td><?=$listing_item->name;?></td>
                                    <td><?=$listing_item->subId;?></td>
                                    <!-- <td><?php echo btn_edit('admin/treefield/edit/' . $option->id . '/' . $listing_item->id) ?>
                                    </td> -->
                                    <td>
                                        <?=btn_delete('admin/customaj/deleteCategories/'.$listing_item->id);?>
                                    </td>
                                </tr>
                                <?php endforeach; ?>
                                <?php else: ?>
                                <tr>
                                    <td colspan="20"><?php echo lang('We could not find any'); ?></td>
                                </tr>
                                <?php endif; ?>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>